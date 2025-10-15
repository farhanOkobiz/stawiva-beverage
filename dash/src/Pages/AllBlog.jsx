import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Upload,
  Tag,
  message,
  Popconfirm,
} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axiosInstance from "../Components/Axios";

const { Option } = Select;

const BlogsComponent = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogCategories, setBlogCategories] = useState([
    {
      _id: "1",
      title: "News",
    },
    {
      _id: "2",
      title: "Events",
    },
  ]);
  const [visible, setVisible] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchBlogs();
    fetchBlogCategories();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axiosInstance.get("/blogs");
      setBlogs(response.data.data.doc);
    } catch (error) {
      message.error("Failed to fetch blogs.");
    }
  };

  const fetchBlogCategories = async () => {
    try {
      // const response = await axiosInstance.get("/blogCategories"); // Assuming there's an API for categories
      // setBlogCategories(response.data.data.doc);
    } catch (error) {
      message.error("Failed to fetch categories.");
    }
  };

  const handleCreateOrEdit = async (values) => {
    try {
      const formData = new FormData();

      // Append form fields
      formData.append("title", values.title);
      formData.append("content", values.content);
      formData.append("youtubeVideo", values.youtubeVideo);
      // Only append the category if the category was explicitly chosen
      if (values.category !== undefined) {
        formData.append("category", values.category);
      }

      values.tags.forEach((tag) => formData.append("tags[]", tag));

      // Append photos (newly uploaded files and existing ones)
      if (fileList.length > 0) {
        fileList.forEach((file) => {
          if (file.originFileObj) {
            formData.append("photos", file.originFileObj);
          } else {
            formData.append("photos", file.url); // Existing photo URLs
          }
        });
      }

      if (editingBlog) {
        await axiosInstance.patch(`/blogs/${editingBlog.slug}`, formData);
        message.success("Blog updated successfully.");
      } else {
        await axiosInstance.post("/blogs", formData);
        message.success("Blog created successfully.");
      }
      setVisible(false);
      fetchBlogs();
    } catch (error) {
      message.error("Failed to save News & Event.");
    }
  };

  const handleDelete = async (slug) => {
    try {
      await axiosInstance.delete(`/blogs/${slug}`);
      message.success("Blog deleted successfully.");
      fetchBlogs();
    } catch (error) {
      message.error("Failed to delete blog.");
    }
  };

  const showModal = (blog = null) => {
    setEditingBlog(blog);
    setVisible(true);
    setFileList([]);

    form.resetFields();

    if (blog) {
      form.setFieldsValue({
        title: blog.title,
        content: blog.content,
        tags: blog.tags,
        // Do not set category when editing an existing blog
      });

      // Set the existing photos in fileList for the Upload component
      if (blog.photos && blog.photos.length > 0) {
        const existingFiles = blog.photos.map((url, index) => ({
          uid: index,
          name: url.substring(url.lastIndexOf("/") + 1),
          status: "done",
          url, // Important to distinguish existing files
        }));
        setFileList(existingFiles);
      }
    } else {
      // Only set category when creating a new blog
      form.setFieldsValue({ category: null });
    }
  };

  const handleFileChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Photos",
      dataIndex: "photos",
      key: "photos",
      render: (photos) => (
        <div>
          {photos.length === 0 ? (
            <span>No Photo</span>
          ) : (
            photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt="blog"
                style={{ width: "100px", marginRight: "10px" }}
              />
            ))
          )}
        </div>
      ),
    },
    {
      title: "Youtube Video",
      dataIndex: "youtubeVideo",
      key: "youtubeVideo",
      render: (youtubeVideo) => {
        if (!youtubeVideo) return <span>No Video</span>;

        // Simple validation
        const videoIdMatch = youtubeVideo.match(/(?:v=|youtu\.be\/)([\w-]+)/);
        if (!videoIdMatch) return <span>Invalid URL</span>;

        const embedUrl = `https://www.youtube.com/embed/${videoIdMatch[1]}`;

        return (
          <iframe
            width="200"
            height="120"
            src={embedUrl}
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        );
      },
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags) => (
        <div>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div>
          <Button type="link" onClick={() => showModal(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure delete this blog?"
            onConfirm={() => handleDelete(record.slug)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto py-5">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">News & Events</h1>
        <Button
          type="primary"
          onClick={() => showModal()}
          style={{ marginBottom: 16 }}
        >
          <PlusOutlined /> Create News & Events
        </Button>
      </div>

      <Table columns={columns} dataSource={blogs} rowKey="_id" />

      <Modal
        visible={visible}
        title={editingBlog ? "Edit News & Event" : "Create News & Event"}
        onCancel={() => setVisible(false)}
        onOk={() => form.submit()}
      >
        <Form form={form} layout="vertical" onFinish={handleCreateOrEdit}>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input />
          </Form.Item>

          {!editingBlog && (
            <Form.Item
              name="category"
              label="Category"
              rules={[{ required: true, message: "Please select a category!" }]}
            >
              <Select placeholder="Select a category">
                {blogCategories.map((category) => (
                  <Option key={category._id} value={category?.title}>
                    {category.title}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          )}

          <Form.Item name="tags" label="Tags">
            <Select mode="tags" placeholder="Add tags">
              {form.getFieldValue("tags")?.map((tag) => (
                <Option key={tag} value={tag}>
                  {tag}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="content"
            label="Content"
            rules={[{ required: true, message: "Please input the content!" }]}
          >
            <ReactQuill />
          </Form.Item>

          <Form.Item name="photos" label="Upload Photos">
            <Upload
              listType="picture"
              multiple
              fileList={fileList}
              onChange={handleFileChange}
              beforeUpload={() => false}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="youtubeVideo"
            label="YouTube Video Link"
            rules={[{ message: "Please input the youtube video link" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default BlogsComponent;
