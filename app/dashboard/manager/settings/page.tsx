"use client";

"use client";

import React from 'react';
import { Card, Form, Input, Button, Typography, Switch, Avatar, Upload, Row, Col, Select, Space } from 'antd';
import { UserOutlined, UploadOutlined, BellOutlined, LockOutlined, GlobalOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

export default function SettingsPage() {
  return (
    <div style={{ padding: '24px', backgroundColor: '#f7f8fc' }}>
      <Title level={3}>Settings</Title>
      
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <Card title="Personal Information" extra={<UserOutlined />} style={{ borderRadius: '8px' }}>
            <Form layout="vertical">
              <Form.Item label="Profile Picture">
                <Space align="center">
                  <Avatar size={64} icon={<UserOutlined />} src="/images/avatars/thumb-1.jpg" />
                  <Upload>
                    <Button icon={<UploadOutlined />}>Change</Button>
                  </Upload>
                </Space>
              </Form.Item>
              <Form.Item label="Full Name">
                <Input defaultValue="Alex Manager" />
              </Form.Item>
              <Form.Item label="Email Address">
                <Input type="email" defaultValue="alex.manager@example.com" />
              </Form.Item>
              <Button type="primary">Save Profile</Button>
            </Form>
          </Card>

          <Card title="Security" extra={<LockOutlined />} style={{ borderRadius: '8px', marginTop: '24px' }}>
            <Form layout="vertical">
              <Form.Item label="Current Password">
                <Input.Password />
              </Form.Item>
              <Form.Item label="New Password">
                <Input.Password />
              </Form.Item>
              <Form.Item label="Confirm New Password">
                <Input.Password />
              </Form.Item>
              <Button type="primary">Update Password</Button>
            </Form>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="Notifications" extra={<BellOutlined />} style={{ borderRadius: '8px' }}>
            <Form.Item label="Email Notifications">
              <Switch defaultChecked />
              <Text type="secondary" style={{ marginLeft: '12px' }}>New staff clock-ins</Text>
            </Form.Item>
            <Form.Item>
              <Switch />
              <Text type="secondary" style={{ marginLeft: '12px' }}>Weekly performance reports</Text>
            </Form.Item>
            <Form.Item>
              <Switch defaultChecked />
              <Text type="secondary" style={{ marginLeft: '12px' }}>Perimeter breach alerts</Text>
            </Form.Item>
          </Card>

          <Card title="Company Settings" extra={<GlobalOutlined />} style={{ borderRadius: '8px', marginTop: '24px' }}>
            <Form layout="vertical">
              <Form.Item label="Timezone">
                <Select defaultValue="gmt-5">
                  <Option value="gmt-5">Eastern Time (GMT-5)</Option>
                  <Option value="gmt-8">Pacific Time (GMT-8)</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Default Language">
                <Select defaultValue="en">
                  <Option value="en">English</Option>
                  <Option value="es">Spanish</Option>
                </Select>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

