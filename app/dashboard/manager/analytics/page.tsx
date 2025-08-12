"use client";

"use client";

import React from 'react';
import { Card, Row, Col, Typography, Progress } from 'antd';
import MetricCard from '../../components/MetricCard';
import DistributionChart from '../../components/DistributionChart';
import { UsergroupAddOutlined, ClockCircleOutlined, StarOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const attendanceData = [
  { label: 'On Time', percent: 85, color: '#52c41a' },
  { label: 'Late', percent: 10, color: '#faad14' },
  { label: 'Absent', percent: 5, color: '#f5222d' },
];

const performanceData = [
  { label: 'Exceeds', percent: 25, color: '#1890ff' },
  { label: 'Meets', percent: 60, color: '#52c41a' },
  { label: 'Needs Improvement', percent: 15, color: '#faad14' },
];

export default function AnalyticsPage() {
  return (
    <div style={{ padding: '24px', backgroundColor: '#f7f8fc' }}>
      <Title level={3}>Workforce Analytics</Title>
      <Text type="secondary">Key metrics and insights on staff performance and attendance.</Text>

      <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
        <Col xs={24} sm={8}>
          <Card style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #d3d7de' }}>
            <MetricCard title="Total Staff" value={58} icon={<UsergroupAddOutlined />} color="#1890ff" note="4 new this month" />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #d3d7de' }}>
            <MetricCard title="Avg. Hours / Week" value={38.5} icon={<ClockCircleOutlined />} color="#52c41a" note="-1.2% from last week" />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <MetricCard title="Avg. Performance" value={'89%'} icon={<StarOutlined />} color="#faad14" note="+2.5% from last month" />
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
        <Col xs={24} lg={12}>
          <DistributionChart title="Attendance Distribution (This Month)" data={attendanceData} />
        </Col>
        <Col xs={24} lg={12}>
          <DistributionChart title="Performance Overview" data={performanceData} />
        </Col>
      </Row>
    </div>
  );
}

