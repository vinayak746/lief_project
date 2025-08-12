"use client";

import React from 'react';
import { Card, Table, Typography, Tag, Input, DatePicker, Space } from 'antd';

const { Title } = Typography;
const { Search } = Input;
const { RangePicker } = DatePicker;

const historyData = [
  { key: '1', date: '2025-08-10', clockIn: '08:01 AM', clockOut: '05:03 PM', hours: '9h 2m', status: 'Completed' },
  { key: '2', date: '2025-08-09', clockIn: '07:55 AM', clockOut: '05:00 PM', hours: '9h 5m', status: 'Completed' },
  { key: '3', date: '2025-08-08', clockIn: '08:05 AM', clockOut: '04:58 PM', hours: '8h 53m', status: 'Completed' },
  { key: '4', date: '2025-08-07', clockIn: '09:00 AM', clockOut: '06:00 PM', hours: '9h 0m', status: 'Completed' },
  { key: '5', date: '2025-08-06', clockIn: '08:10 AM', clockOut: '05:15 PM', hours: '9h 5m', status: 'Completed' },
];

const historyColumns = [
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Clock In', dataIndex: 'clockIn', key: 'clockIn' },
  { title: 'Clock Out', dataIndex: 'clockOut', key: 'clockOut' },
  { title: 'Total Hours', dataIndex: 'hours', key: 'hours' },
  { title: 'Status', dataIndex: 'status', key: 'status', render: (status: string) => <Tag color={status === 'Completed' ? 'green' : 'volcano'}>{status}</Tag> },
];

export default function HistoryPage() {
  return (
    <div style={{ padding: '24px', backgroundColor: '#f7f8fc' }}>
      <Title level={3}>Shift History</Title>
      <Card style={{ borderRadius: '8px' }}>
        <Space style={{ marginBottom: 16 }}>
          <Search placeholder="Search notes..." style={{ width: 300 }} />
          <RangePicker />
        </Space>
        <Table 
          dataSource={historyData} 
          columns={historyColumns} 
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  );
}
