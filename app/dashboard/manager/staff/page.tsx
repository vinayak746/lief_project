"use client";

import React from 'react';
import { Card, Table, Typography, Button, Input, Select, Space, Avatar, Tag, Progress } from 'antd';
import { UserOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;

const staffData = [
  { key: '1', name: 'John Smith', role: 'RN', status: 'Active', performance: 92, lastLogin: '2025-08-12 08:00 AM' },
  { key: '2', name: 'Emily Chen', role: 'CNA', status: 'Active', performance: 88, lastLogin: '2025-08-12 08:05 AM' },
  { key: '3', name: 'Carlos Ramirez', role: 'LPN', status: 'Inactive', performance: 75, lastLogin: '2025-08-10 05:30 PM' },
  { key: '4', name: 'Ava Patel', role: 'RN', status: 'Active', performance: 95, lastLogin: '2025-08-12 08:15 AM' },
  { key: '5', name: 'Michael Brown', role: 'CNA', status: 'On-leave', performance: 80, lastLogin: '2025-08-01 09:00 AM' },
];

const staffColumns = [
  { title: 'Name', dataIndex: 'name', key: 'name', render: (name: string) => <Space><Avatar icon={<UserOutlined />} />{name}</Space> },
  { title: 'Role', dataIndex: 'role', key: 'role' },
  { title: 'Status', dataIndex: 'status', key: 'status', render: (status: string) => {
      let color = 'default';
      if (status === 'Active') color = 'green';
      if (status === 'Inactive') color = 'red';
      if (status === 'On-leave') color = 'orange';
      return <Tag color={color}>{status}</Tag>;
    }
  },
  { title: 'Performance', dataIndex: 'performance', key: 'performance', render: (score: number) => <Progress percent={score} size="small" /> },
  { title: 'Last Login', dataIndex: 'lastLogin', key: 'lastLogin' },
  { title: 'Actions', key: 'actions', render: () => <Button type="link">Edit</Button> },
];

export default function StaffPage() {
  return (
    <div style={{ padding: '24px', backgroundColor: '#f7f8fc' }}>
      <Title level={3}>Staff Management</Title>
      <Card title="Manage Staff" style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
        <Space style={{ marginBottom: 16 }}>
          <Input placeholder="Search Staff..." prefix={<SearchOutlined />} style={{ width: 300 }} />
          <Select defaultValue="all" style={{ width: 150 }}>
            <Option value="all">All Roles</Option>
            <Option value="RN">RN</Option>
            <Option value="CNA">CNA</Option>
            <Option value="LPN">LPN</Option>
          </Select>
          <Button type="primary" icon={<PlusOutlined />}>Add Staff</Button>
        </Space>
        <Table 
          dataSource={staffData} 
          columns={staffColumns} 
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  );
}
