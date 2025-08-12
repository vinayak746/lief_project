"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Card, Row, Col, Statistic, Table, Button, Typography, Input, Select, Space, Badge, Form, Descriptions } from 'antd';
import { useRouter } from 'next/navigation';
import { UsergroupAddOutlined, CheckCircleOutlined, PauseCircleOutlined, WarningOutlined, SearchOutlined, PlusOutlined, EyeOutlined } from '@ant-design/icons';
import Map from '../components/Map';

const { Title, Text } = Typography;
const { Option } = Select;

// Define the type for staff data
interface Staff {
  key: string;
  name: string;
  role: string;
  clockInTime: string;
  clockInLocation: string;
  clockOutTime: string;
  clockOutLocation: string;
}

const allStaffData: Staff[] = [
  { key: '1', name: 'John Smith', role: 'RN', clockInTime: '07:58 AM', clockInLocation: 'Main Entrance', clockOutTime: '-', clockOutLocation: '-' },
  { key: '2', name: 'Emily Chen', role: 'CNA', clockInTime: '08:05 AM', clockInLocation: 'Wing B', clockOutTime: '-', clockOutLocation: '-' },
];

export default function ManagerDashboard() {
  const [mapState, setMapState] = useState({ lat: 34.0522, lng: -118.2437, radius: 500 });
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const router = useRouter();
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      lat: mapState.lat,
      lng: mapState.lng,
    });
  }, [mapState.lat, mapState.lng, form]);

  const handleMapClick = (coords: { lng: number; lat: number }) => {
    setMapState({ ...mapState, lng: coords.lng, lat: coords.lat });
    form.setFieldsValue({ lat: coords.lat, lng: coords.lng });
  };

  const handlePerimeterChange = (values: any) => {
    const newLat = parseFloat(values.lat);
    const newLng = parseFloat(values.lng);
    const newRadius = parseInt(values.radius, 10);
    if (!isNaN(newLat) && !isNaN(newLng) && !isNaN(newRadius)) {
      setMapState({ lat: newLat, lng: newLng, radius: newRadius });
    }
  };

  const filteredStaffData = useMemo(() => {
    return allStaffData.filter(staff => {
      const lowerCaseSearch = searchTerm.toLowerCase();
      const matchesSearch = staff.name.toLowerCase().includes(lowerCaseSearch) || staff.clockInLocation.toLowerCase().includes(lowerCaseSearch);
      const matchesRole = roleFilter === 'all' || staff.role.toLowerCase() === roleFilter;
      return matchesSearch && matchesRole;
    });
  }, [searchTerm, roleFilter]);

  

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Role', dataIndex: 'role', key: 'role', render: (role: string) => {
      let color = '#1890ff';
      if (role === 'CNA') color = '#52c41a';
      if (role === 'LPN') color = '#faad14';
      return <Badge count={role} style={{ backgroundColor: color, color: '#fff', boxShadow: `0 0 3px ${color}` }} />;
    }},
    { title: 'Clock-in Time', dataIndex: 'clockInTime', key: 'clockInTime' },
    { title: 'Clock-in Location', dataIndex: 'clockInLocation', key: 'clockInLocation' },
    { title: 'Clock-out Time', dataIndex: 'clockOutTime', key: 'clockOutTime' },
    { title: 'Clock-out Location', dataIndex: 'clockOutLocation', key: 'clockOutLocation' },
    { 
      title: 'Actions', 
      key: 'actions', 
      render: (_: any, record: Staff) => (
        <Button type="primary" icon={<EyeOutlined />} onClick={() => router.push(`/dashboard/manager/staff/${record.key}`)}>View</Button>
      )
    },
  ];

  return (
    <div style={{ padding: '24px', background: '#f9fafb' }}>
      <Title level={3} style={{ marginBottom: '24px', color: '#111827' }}>Dashboard</Title>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} md={6}>
          <Card style={{ borderRadius: '12px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', border: '1px solid #e5e7eb' }}>
            <Statistic title="Total Staff" value={58} prefix={<UsergroupAddOutlined />} valueStyle={{ color: '#3b82f6' }} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card style={{ borderRadius: '12px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', border: '1px solid #e5e7eb' }}>
            <Statistic title="Clocked In" value={42} prefix={<CheckCircleOutlined />} valueStyle={{ color: '#10b981' }} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card style={{ borderRadius: '12px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', border: '1px solid #e5e7eb' }}>
            <Statistic title="On Leave" value={5} prefix={<PauseCircleOutlined />} valueStyle={{ color: '#f97316' }} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card style={{ borderRadius: '12px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', border: '1px solid #e5e7eb' }}>
            <Statistic title="Alerts" value={3} prefix={<WarningOutlined />} valueStyle={{ color: '#ef4444' }} />
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24} lg={16}>
          <Card title="Live Map" style={{ borderRadius: '12px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', height: '100%', border: '1px solid #e5e7eb' }}>
            <div style={{ height: 400, borderRadius: '8px', overflow: 'hidden' }}>
              <Map lng={mapState.lng} lat={mapState.lat} zoom={12} onMapClick={handleMapClick} />
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Perimeter Control" style={{ borderRadius: '12px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', height: '100%', border: '1px solid #e5e7eb' }}>
            <Form form={form} layout="vertical" onFinish={handlePerimeterChange} initialValues={{ lat: mapState.lat, lng: mapState.lng, radius: mapState.radius }}>
              <Form.Item name="lat" label="Latitude" rules={[{ required: true, message: 'Please input latitude!' }]}>
                <Input type="number" />
              </Form.Item>
              <Form.Item name="lng" label="Longitude" rules={[{ required: true, message: 'Please input longitude!' }]}>
                <Input type="number" />
              </Form.Item>
              <Form.Item name="radius" label="Radius (meters)" rules={[{ required: true, message: 'Please input radius!' }]}>
                <Input type="number" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">Update Perimeter</Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>

      <Card title="Currently Clocked-in Staff" style={{ marginTop: 24, borderRadius: '12px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', border: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
          <Space>
            <Input
              placeholder="Search staff..."
              prefix={<SearchOutlined />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: 240 }}
            />
            <Select defaultValue="all" onChange={(value) => setRoleFilter(value)} style={{ width: 150 }}>
              <Option value="all">All Roles</Option>
              <Option value="rn">RN</Option>
              <Option value="cna">CNA</Option>
              <Option value="lpn">LPN</Option>
            </Select>
          </Space>
          <Button type="primary" icon={<PlusOutlined />}>Add Staff</Button>
        </div>
        <Table dataSource={filteredStaffData} columns={columns} rowKey="key" pagination={{ pageSize: 5 }} />
      </Card>
    </div>
  );
}
