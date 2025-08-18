"use client";

import React, { useState } from "react";
import {
  Card,
  Table,
  Typography,
  Button,
  Space,
  Tag,
  Modal,
  Form,
  Input,
  InputNumber,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import Map from "../../components/Map";

const { Title } = Typography;

const perimeterData = [
  {
    key: "1",
    name: "Main Office",
    radius: 500,
    lat: 34.0522,
    lng: -118.2437,
    status: "Active",
  },
  {
    key: "2",
    name: "North Campus",
    radius: 1000,
    lat: 34.0722,
    lng: -118.2537,
    status: "Active",
  },
  {
    key: "3",
    name: "Downtown Site",
    radius: 300,
    lat: 34.0422,
    lng: -118.2337,
    status: "Inactive",
  },
];

const perimeterColumns = (
  handleEdit: (record: any) => void,
  handleDelete: (record: any) => void
) => [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Radius (m)", dataIndex: "radius", key: "radius" },
  { title: "Latitude", dataIndex: "lat", key: "lat" },
  { title: "Longitude", dataIndex: "lng", key: "lng" },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => (
      <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
    ),
  },
  {
    title: "Actions",
    key: "actions",
    render: (_: any, record: any) => (
      <Space size="middle">
        <Button icon={<EditOutlined />} onClick={() => handleEdit(record)}>
          Edit
        </Button>
        <Button
          icon={<DeleteOutlined />}
          danger
          onClick={() => handleDelete(record)}
        >
          Delete
        </Button>
      </Space>
    ),
  },
];

export default function PerimeterPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingPerimeter, setEditingPerimeter] = useState(null);
  const [form] = Form.useForm();

  const handleAdd = () => {
    setEditingPerimeter(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEdit = (record: any) => {
    setEditingPerimeter(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleDelete = (record: any) => {
    Modal.confirm({
      title: "Are you sure you want to delete this perimeter?",
      content: `You are about to delete the perimeter: ${record.name}`,
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "No",
    });
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      // console.log('Form values:', values);
      setIsModalVisible(false);
    });
  };

  return (
    <div style={{ padding: "24px", backgroundColor: "#f7f8fc" }}>
      <Title level={3}>Geofence Perimeters</Title>
      <Card style={{ borderRadius: "8px", marginBottom: "24px" }}>
        <Map lat={34.0522} lng={-118.2437} zoom={11} />
      </Card>
      <Card style={{ borderRadius: "8px" }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAdd}
          style={{ marginBottom: 16 }}
        >
          Add Perimeter
        </Button>
        <Table
          dataSource={perimeterData}
          columns={perimeterColumns(handleEdit, handleDelete)}
          pagination={{ pageSize: 5 }}
        />
      </Card>

      <Modal
        title={editingPerimeter ? "Edit Perimeter" : "Add New Perimeter"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Perimeter Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="radius"
            label="Radius (meters)"
            rules={[{ required: true }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="lat" label="Latitude" rules={[{ required: true }]}>
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="lng" label="Longitude" rules={[{ required: true }]}>
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
