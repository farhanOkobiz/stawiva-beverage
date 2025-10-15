import React, { useEffect, useState } from "react";
import { Table, Button, message, Modal } from "antd";
import axiosInstance from "../Components/Axios";

const Career = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApplicants();
  }, []);

  const fetchApplicants = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get("/career");
      setApplicants(data.data.doc);
    } catch (error) {
      message.error("Failed to fetch career applicants");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this applicant?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: async () => {
        try {
          await axiosInstance.delete(`/career/${id}`);
          message.success("Applicant deleted successfully!");
          fetchApplicants();
        } catch (error) {
          message.error("Failed to delete applicant");
        }
      },
    });
  };

  const columns = [
    {
      title: "SL",
      key: "sl",
      render: (text, record, index) => index + 1,
    },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Address", dataIndex: "Address", key: "Address" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Cover Letter", dataIndex: "coverLatter", key: "coverLatter" },
    {
      title: "CV",
      dataIndex: "cv",
      key: "cv",
      render: (cv) => (
        <a href={cv} target="_blank" rel="noopener noreferrer">
          View CV
        </a>
      ),
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => new Date(createdAt).toLocaleString(),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button danger onClick={() => handleDelete(record._id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div className="container mx-auto py-5">
      <h1 className="text-2xl font-bold mb-4">Career Applicants</h1>

      <Table
        columns={columns}
        dataSource={applicants}
        rowKey="_id"
        loading={loading}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default Career;
