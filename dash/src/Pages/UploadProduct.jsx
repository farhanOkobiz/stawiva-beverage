import { useEffect, useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Upload,
  message,
  Popconfirm,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import axiosInstance from "../Components/Axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import the Quill styling
import DynamicFormList from "../Components/DynamicFormList";
import DynamicPackagingField from "../Components/DynamicPackagingField";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [photosToRemove, setPhotosToRemove] = useState([]); // Track photos to remove
  const [loading, setLoading] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false); // Loading state for the OK button
  // console.log(products[0].specification, "products from product");
  // Fetch all products and categories
  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchBrands();
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      fetchCategories(selectedBrand.slug);
    }
  }, [selectedBrand]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get("/products");
      setProducts(data.data.doc);
    } catch (error) {
      message.error("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  const fetchBrands = async () => {
    try {
      const { data } = await axiosInstance.get("/brand");
      setBrands(data.data.brands);
    } catch (error) {
      message.error("Failed to fetch brands");
    }
  };

  const fetchCategories = async (brandSlug) => {
    try {
      const { data } = await axiosInstance.get(
        `/brand/${brandSlug}/categories`
      );
      setCategories(data.data.categories);
    } catch (error) {
      // message.error("Failed to fetch categories");
    }
  };

  const handleBrandChange = (brandId) => {
    const brand = brands.find((b) => b._id === brandId);
    setSelectedBrand(brand);
  };

  // Handle create/edit
  const handleOk = async () => {
    setConfirmLoading(true); // Set loading state to true
    try {
      const values = await form.validateFields();
      console.log("form values on submit:", values);
      const formData = new FormData();

      // Require 'packaging' (DynamicPackagingField uses name="packaging")
      const requiredFields = ["packaging"];

      // Validate required fields robustly
      for (const field of requiredFields) {
        const val = values[field];
        if (!Array.isArray(val) || val.length === 0) {
          message.error(
            `${field} is required and must have at least one entry.`
          );
          setConfirmLoading(false);
          return;
        }

        // Validate packaging entries: each should have a non-empty 'type' and a non-empty 'sizes' array
        const invalidPackaging = val.some((entry) => {
          if (!entry || typeof entry !== "object") return true;
          const hasType =
            entry.type &&
            String(entry.type).trim() !== "" &&
            entry.type !== "undefined";
          const hasSizes =
            Array.isArray(entry.sizes) &&
            entry.sizes.filter(
              (s) => s !== undefined && s !== null && String(s).trim() !== ""
            ).length > 0;
          return !(hasType && hasSizes);
        });

        if (invalidPackaging) {
          message.error(
            "Each packaging entry must have a valid type and at least one size."
          );
          setConfirmLoading(false);
          return;
        }
      }

      // Append fields from the form into formData
      for (const key in values) {
        const value = values[key];
        if (value === undefined || value === null) continue;

        if (Array.isArray(value)) {
          // Special-case packaging: backend expects the JSON string in 'model'
          if (key === "packaging") {
            formData.append("model", JSON.stringify(value));
          } else {
            // If array items are objects (e.g., other lists), serialize the whole array as JSON
            const firstItem = value[0];
            if (firstItem && typeof firstItem === "object") {
              formData.append(key, JSON.stringify(value));
            } else {
              // primitive array (strings) - append as multiple fields
              const validItems = value.filter(
                (item) =>
                  item !== undefined &&
                  item !== null &&
                  String(item).trim() !== "" &&
                  item !== "undefined"
              );
              if (validItems.length > 0) {
                validItems.forEach((item) => {
                  formData.append(`${key}[]`, item);
                });
              } else {
                message.error(
                  `${key} is required but contains invalid values.`
                );
                setConfirmLoading(false);
                return;
              }
            }
          }
        } else {
          formData.append(key, value);
        }
      }
      // Combine existing photos and new ones
      const existingPhotos = editingProduct ? editingProduct.photos : [];
      const newPhotos = fileList.map((file) => file.originFileObj); // New files to upload

      // Prepare the final photos array for submission
      const allPhotos = [
        ...existingPhotos.filter((photo) => !photosToRemove.includes(photo)),
        ...newPhotos,
      ];

      // ** Check if the total photos exceed the limit (e.g., 4 photos) **
      const MAX_PHOTOS = 4;
      if (allPhotos.length > MAX_PHOTOS) {
        message.error(`You can upload a maximum of ${MAX_PHOTOS} photos.`);
        setConfirmLoading(false);
        return;
      }

      // Append photos to formData
      allPhotos.forEach((photo) => {
        if (photo) {
          formData.append("photos", photo);
        }
      });

      // Handle update or create
      if (editingProduct) {
        formData.append("photosToRemove", photosToRemove); // Add photos to remove
        await axiosInstance.patch(
          `/products/${editingProduct.slug}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        message.success("Product updated successfully!");
      } else {
        await axiosInstance.post("/products", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        message.success("Product created successfully!");
      }

      fetchProducts();
      setIsModalOpen(false);
      form.resetFields();
      setFileList([]);
      setPhotosToRemove([]); // Reset photos to remove
    } catch (error) {
      message.error("Failed to save product");
    } finally {
      setConfirmLoading(false); // Set loading state to false
    }
  };

  // Handle delete
  const handleDelete = async (slug) => {
    try {
      await axiosInstance.delete(`/products/${slug}`);
      message.success("Product deleted successfully!");
      fetchProducts();
    } catch (error) {
      message.error("Failed to delete product");
    }
  };

  // Open modal for create/edit
  const showModal = (product = null) => {
    setEditingProduct(product);
    setIsModalOpen(true);
    setPhotosToRemove([]);
    console.log(product.specification, "product from modal");
    if (product) {
      form.setFieldsValue({
        ...product,
        // backend expects body.model to be a JSON string that becomes specification
        // the UI uses `packaging` Form.List, so populate that from product.specification
        packaging: product?.specification || [],
        category: product.category?._id,
        brand: product.brand?._id,
        details: product.details,
      });
      setFileList(
        (product.photos || []).map((url, index) => ({
          uid: index,
          name: `photo-${index}`,
          status: "done",
          url: url,
        }))
      );
      const brand = brands.find((b) => b._id === product.brand._id);
      setSelectedBrand(brand);
      fetchCategories(brand.slug);
    } else {
      form.resetFields();
      setFileList([]);
    }
  };

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList); // This will keep track of selected files
  };

  // const handleRemovePhoto = (url) => {
  //   Modal.confirm({
  //     title: "Are you sure you want to remove this photo?",
  //     onOk: () => {
  //       setPhotosToRemove((prev) => [...prev, url]); // Add to removal list
  //       setFileList((prev) => prev.filter((file) => file.url !== url)); // Remove from file list
  //     },
  //   });
  // };

  const columns = [
    {
      title: "SL",
      key: "sl",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Photos",
      dataIndex: "photos",
      key: "photos",
      render: (photos) => (
        <>
          {photos.map((photo, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                marginRight: "5px",
              }}
            >
              <img src={photo} alt="product" style={{ width: "50px" }} />
            </div>
          ))}
        </>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      dataIndex: ["category", "title"],
      key: "category",
    },
    {
      title: "Brand",
      dataIndex: ["brand", "title"],
      key: "brand",
    },
    {
      title: "Packaging",
      dataIndex: "packaging",
      key: "packaging",
      render: (packaging) =>
        packaging
          .map((p) => `${p.type}: ${p.sizes ? p.sizes.join(", ") : ""}`)
          .join(" | "),
    },
    {
      title: "Main Ingredients",
      dataIndex: "mainIngredients",
      key: "mainIngredients",
      render: (ingredients) => ingredients.join(", "),
    },
    {
      title: "Certifications",
      dataIndex: "certifications",
      key: "certifications",
      render: (certs) => certs.join(", "),
    },
    {
      title: "Shelf Life",
      dataIndex: "shelfLife",
      key: "shelfLife",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <>
          <Button
            icon={<EditOutlined />}
            onClick={() => showModal(record)}
          ></Button>{" "}
          <Popconfirm
            title="Are you sure to delete this product?"
            onConfirm={() => handleDelete(record.slug)}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteOutlined />} danger />
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto py-5">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">All Products</h1>
        <Button type="primary" onClick={() => showModal()}>
          Create Product
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={products}
        rowKey="_id"
        loading={loading}
      />

      <Modal
        title={editingProduct ? "Edit Product" : "Create Product"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        className="custom-modal"
        width={1000}
      >
        <Form form={form} layout="vertical">
          {/* Title */}
          <Form.Item
            name="title"
            label="Title (Title has to be unique)"
            rules={[
              { required: true, message: "Please enter the product title" },
            ]}
          >
            <Input />
          </Form.Item>
          {/* Details */}
          <Form.Item
            name="details"
            label="Details"
            rules={[
              { required: true, message: "Please enter the product details" },
            ]}
          >
            <ReactQuill />
          </Form.Item>
          {/* Brand */}
          <Form.Item
            name="brand"
            label="Brand"
            rules={[{ required: true, message: "Please select a brand" }]}
          >
            <Select onChange={handleBrandChange}>
              {brands.map((brand) => (
                <Select.Option key={brand._id} value={brand._id}>
                  {brand.title}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          {/* Category */}
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: "Please select a Category" }]}
          >
            <Select>
              {categories.map((category) => (
                <Select.Option key={category._id} value={category._id}>
                  {category.title}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          {/* Packaging (Dynamic Array) */}
          <DynamicPackagingField form={form} />
          {/* Main Ingredients (Dynamic Array) */}
          <DynamicFormList
            name="mainIngredients"
            label="Main Ingredients"
            placeholder="e.g., Water"
          />
          {/* Certifications (Dynamic Array) */}
          <DynamicFormList
            name="certifications"
            label="Certifications"
            placeholder="e.g., ISO, FDA"
          />
          {/* Shelf Life */}
          <Form.Item name="shelfLife" label="Shelf Life">
            <Input placeholder="24 months" />
          </Form.Item>
          {/* photo */}
          <Form.Item label="Photos">
            <Upload
              fileList={fileList}
              onChange={handleFileChange}
              multiple
              beforeUpload={() => false}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Products;
