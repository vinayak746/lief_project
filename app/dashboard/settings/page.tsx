"use client";

import React from 'react';
import { Card, Form, Input, Button, Typography, Switch, Avatar, Upload, Space } from 'antd';
import { UserOutlined, UploadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export default function SettingsPage() {
  return (
    <div style={{ padding: '24px', backgroundColor: '#f7f8fc' }}>
      <Title level={3}>Settings</Title>
      <Card style={{ borderRadius: '8px', maxWidth: '800px' }}>
        <Title level={4}>Profile Information</Title>
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
            <Input defaultValue="Alex Worker" />
          </Form.Item>
          <Form.Item label="Email Address">
            <Input type="email" defaultValue="alex.worker@example.com" />
          </Form.Item>
          <Form.Item label="Phone Number">
            <Input defaultValue="+1 (123) 456-7890" />
          </Form.Item>
          <Title level={4} style={{marginTop: '24px'}}>Notification Settings</Title>
          <Form.Item label="Email Notifications">
            <Switch defaultChecked />
            <Text type="secondary" style={{marginLeft: '12px'}}>Receive email updates and alerts.</Text>
          </Form.Item>
          <Form.Item label="Push Notifications">
            <Switch defaultChecked />
            <Text type="secondary" style={{marginLeft: '12px'}}>Get push notifications on your mobile device.</Text>
          </Form.Item>
          <Form.Item>
            <Button type="primary">Save Changes</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
