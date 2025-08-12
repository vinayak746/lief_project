"use client";
import React, { useState, useEffect } from 'react';
import { 
  Button, 
  Card, 
  Col, 
  Progress, 
  Row, 
  Space, 
  Statistic, 
  Switch, 
  Table, 
  Typography,
  Tabs,
  Badge,
  Tag
} from 'antd';
import { 
  ArrowDownOutlined, 
  ArrowUpOutlined, 
  BarChartOutlined, 
  CalendarOutlined, 
  CheckCircleFilled, 
  CheckCircleOutlined, 
  ClockCircleOutlined, 
  CloseCircleFilled, 
  CoffeeOutlined,
  LoginOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import MetricCard from './components/MetricCard';

const { Title, Text } = Typography;
const { TabPane } = Tabs;
import { message } from 'antd';

// Simple custom chart component
const SimpleChart = ({ data }: { data: Array<{ day: string; hours: number; color: string }> }) => {
  const total = data.reduce((sum, item) => sum + item.hours, 0);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
      <div style={{ 
        width: '150px', 
        height: '150px', 
        borderRadius: '50%', 
        background: `conic-gradient(${data.map((item, index) => 
          `${item.color} ${index === 0 ? 0 : data.slice(0, index).reduce((sum, prev) => sum + prev.hours, 0) / total * 360}deg ${data.slice(0, index + 1).reduce((sum, prev) => sum + prev.hours, 0) / total * 360}deg`
        ).join(', ')})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: '20px'
      }}>
        <div style={{ 
          width: '100px', 
          height: '100px', 
          borderRadius: '50%', 
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <Text strong style={{ fontSize: '20px' }}>{total}h</Text>
          <Text type="secondary" style={{ fontSize: '12px' }}>Total</Text>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
        {data.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: item.color, borderRadius: '3px' }} />
            <Text style={{ fontSize: '12px' }}>{item.day}: {item.hours}h</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function CareTakerDashboard() {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  const handleClockIn = () => {
    if (!navigator.geolocation) {
      const errorMsg = 'Geolocation is not supported by your browser.';
      setLocationError(errorMsg);
      message.error(errorMsg);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setLocationError(null);
        setIsClockedIn(true);
        message.success('Clocked in successfully!');
      },
      () => {
        const errorMsg = 'Unable to retrieve your location. Please enable location services.';
        setLocationError(errorMsg);
        message.error(errorMsg);
      }
    );
  };

  const handleClockOut = () => {
    setIsClockedIn(false);
    message.success('Clocked out successfully!');
  };
  
  const chartData = [
    { day: 'Mon', hours: 8, color: '#1890ff' },
    { day: 'Tue', hours: 7.5, color: '#52c41a' },
    { day: 'Wed', hours: 9, color: '#faad14' },
    { day: 'Thu', hours: 8.5, color: '#f759ab' },
    { day: 'Fri', hours: 8, color: '#13c2c2' },
  ];
  
  const shiftsData = [
    { key: '1', date: 'Aug 10, 2025', clockIn: '5:47 PM', inLocation: 'On Site', clockOut: '2:47 AM', outLocation: 'On Site', hours: '9:00', notes: 'Covered Wk 5' },
    { key: '2', date: 'Aug 9, 2025', clockIn: '5:12 PM', inLocation: 'On Site', clockOut: '2:12 AM', outLocation: 'On Site', hours: '9:00', notes: '' },
    { key: '3', date: 'Aug 8, 2025', clockIn: '6:01 PM', inLocation: 'On Site', clockOut: '3:00 AM', outLocation: 'On Site', hours: '8:59', notes: '' },
  ];

  const shiftsColumns = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Clock In', dataIndex: 'clockIn', key: 'clockIn', render: (text: string) => <Tag color="green">{text}</Tag> },
    { title: 'In Location', dataIndex: 'inLocation', key: 'inLocation' },
    { title: 'Clock-out', dataIndex: 'clockOut', key: 'clockOut', render: (text: string) => <Tag color="blue">{text}</Tag> },
    { title: 'Out Location', dataIndex: 'outLocation', key: 'outLocation' },
    { title: 'Hours', dataIndex: 'hours', key: 'hours', render: (text: string) => <Text strong>{text}</Text> },
    { title: 'Notes', dataIndex: 'notes', key: 'notes' },
  ];

  return (
    <div style={{ padding: '24px', backgroundColor: '#f7f8fc' }}>
      <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '20px 24px', borderRadius: '8px', marginBottom: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <Title level={3} style={{ color: 'white', margin: 0 }}>Worker Dashboard</Title>
        <Text style={{ color: 'white', opacity: 0.9 }}>Clock in/out, track your work, and review your shifts.</Text>
      </div>

      <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={8}>
          <MetricCard title="Weekly Hours" value={41} icon={<ClockCircleOutlined />} color="#1890ff" note="of 40 hours" />
        </Col>
        <Col xs={24} sm={8}>
          <MetricCard title="Upcoming Shifts" value={3} icon={<CalendarOutlined />} color="#52c41a" note="in next 7 days" />
        </Col>
        <Col xs={24} sm={8}>
          <MetricCard title="Time Off" value={2} icon={<CoffeeOutlined />} color="#faad14" note="days requested" />
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col xs={24} lg={16}>
          <Card title="Hours by Day (This Week)" style={{ height: '100%', borderRadius: '12px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', border: '1px solid #e5e7eb' }}>
            <SimpleChart data={chartData} />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Clock In / Clock Out" style={{ height: '100%', borderRadius: '12px', textAlign: 'center', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', border: '1px solid #e5e7eb' }}>
            <Space direction="vertical" size="large" style={{ width: '90%', margin: '0 auto' }}>
              <div style={{marginTop: '20px'}}>
                <Badge status={isClockedIn ? "success" : "error"} text={isClockedIn ? "You are clocked in" : "You are clocked out"} />
              </div>
              
              <Button 
                type="primary"
                size="large"
                icon={<LoginOutlined />}
                style={{ width: '100%', height: '50px', fontSize: '18px' }}
                onClick={handleClockIn}
                disabled={isClockedIn || !!locationError}
              >
                Clock In
              </Button>
              <Button
                type="primary"
                danger
                size="large"
                icon={<LogoutOutlined />}
                style={{ width: '100%', height: '50px', fontSize: '18px' }}
                onClick={handleClockOut}
                disabled={!isClockedIn}
              >
                Clock Out
              </Button>

              <Text type="secondary" style={{ fontSize: '12px', marginTop: '20px' }}>
                GPS must be enabled to clock in/out.
              </Text>
            </Space>
          </Card>
        </Col>
      </Row>

      <Card title="Past Shifts" style={{ borderRadius: '12px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', border: '1px solid #e5e7eb' }}>
        <Table 
          dataSource={shiftsData}
          columns={shiftsColumns}
          pagination={{ pageSize: 5 }}
          size="middle"
        />
      </Card>
    </div>
  );
}
