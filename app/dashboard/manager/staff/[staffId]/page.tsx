"use client";

import React from 'react';
import { Avatar, Badge, Card, Col, Row, Table, Typography } from 'antd';

const { Title, Text } = Typography;

const staffData = {
  name: 'John Smith',
  role: 'RN',
  email: 'john.smith@lief.health',
  id: '555-0101',
  avatar: 'JS',
  hours: 56.0,
  lastClockIn: 'Aug 11, 9:00 AM',
  lastClockOut: 'Aug 11, 5:00 PM',
  availability: {
    Mon: '08:00-16:00',
    Tue: '08:00-16:00',
    Wed: '08:00-16:00',
    Thu: '08:00-16:00',
    Fri: '08:00-16:00',
    Sat: 'Off',
    Sun: 'Off',
  },
  notes: 'Use this area for manager notes or certifications. This is a placeholder for future data fields.',
};

const recentShifts = [
  { key: '1', date: 'Aug 11, 2025', clockIn: '9:00 AM', inLocation: 'On Site', clockOut: '5:00 PM', outLocation: 'On Site', hours: 8.00, note: '—' },
  { key: '2', date: 'Aug 10, 2025', clockIn: '8:00 AM', inLocation: 'On Site', clockOut: '4:00 PM', outLocation: 'On Site', hours: 8.00, note: '—' },
  { key: '3', date: 'Aug 9, 2025', clockIn: '9:00 AM', inLocation: 'On Site', clockOut: '5:00 PM', outLocation: 'On Site', hours: 8.00, note: 'Covered Wing B' },
  { key: '4', date: 'Aug 8, 2025', clockIn: '8:00 AM', inLocation: 'On Site', clockOut: '4:00 PM', outLocation: 'On Site', hours: 8.00, note: '—' },
  { key: '5', date: 'Aug 7, 2025', clockIn: '9:00 AM', inLocation: 'On Site', clockOut: '5:00 PM', outLocation: 'On Site', hours: 8.00, note: '—' },
  { key: '6', date: 'Aug 6, 2025', clockIn: '8:00 AM', inLocation: 'On Site', clockOut: '4:00 PM', outLocation: 'On Site', hours: 8.00, note: 'Covered Wing B' },
  { key: '7', date: 'Aug 5, 2025', clockIn: '9:00 AM', inLocation: 'On Site', clockOut: '5:00 PM', outLocation: 'On Site', hours: 8.00, note: '—' },
];

const shiftColumns = [
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Clock-in', dataIndex: 'clockIn', key: 'clockIn' },
  { title: 'In Location', dataIndex: 'inLocation', key: 'inLocation' },
  { title: 'Clock-out', dataIndex: 'clockOut', key: 'clockOut' },
  { title: 'Out Location', dataIndex: 'outLocation', key: 'outLocation' },
  { title: 'Hours', dataIndex: 'hours', key: 'hours' },
  { title: 'Note', dataIndex: 'note', key: 'note' },
];

const StaffProfilePage = () => {
  return (
    <div style={{ padding: '24px', background: '#f9fafb' }}>
      <Card style={{ marginBottom: 24, borderRadius: '12px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' }}>
        <Row align="middle" gutter={16}>
          <Col>
            <Avatar size={64} style={{ backgroundColor: '#1890ff' }}>{staffData.avatar}</Avatar>
          </Col>
          <Col>
            <Title level={4} style={{ margin: 0 }}>
              {staffData.name} <Badge count={staffData.role} style={{ backgroundColor: '#1890ff', marginLeft: 8 }} />
            </Title>
            <Text type="secondary">{staffData.email} • {staffData.id}</Text>
          </Col>
        </Row>
      </Card>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <Card style={{ borderRadius: '12px', textAlign: 'center' }}>
            <Text type="secondary">Hours (7d)</Text>
            <Title level={2} style={{ margin: 0 }}>{staffData.hours.toFixed(1)}</Title>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card style={{ borderRadius: '12px', textAlign: 'center' }}>
            <Text type="secondary">Last clock in</Text>
            <Title level={4} style={{ margin: 0 }}>{staffData.lastClockIn}</Title>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card style={{ borderRadius: '12px', textAlign: 'center' }}>
            <Text type="secondary">Last clock out</Text>
            <Title level={4} style={{ margin: 0 }}>{staffData.lastClockOut}</Title>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24} lg={16}>
          <Card title="Weekly Availability" style={{ borderRadius: '12px' }}>
            <Row gutter={[16, 16]}>
              {Object.entries(staffData.availability).map(([day, time]) => (
                <Col xs={12} sm={8} md={6} key={day}>
                  <Card size="small">
                    <Text strong>{day}</Text>
                    <br />
                    <Text>{time}</Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Notes" style={{ borderRadius: '12px', height: '100%' }}>
            <Text>{staffData.notes}</Text>
          </Card>
        </Col>
      </Row>

      <Card title="Recent Shifts" style={{ marginTop: 24, borderRadius: '12px' }}>
        <Table dataSource={recentShifts} columns={shiftColumns} pagination={{ pageSize: 5 }} />
      </Card>
    </div>
  );
};

export default StaffProfilePage;
