import React from 'react';
import { Card, Space, Progress, Typography } from 'antd';

const { Text } = Typography;

interface DistributionChartProps {
  title: string;
  data: {
    label: string;
    percent: number;
    color: string;
  }[];
}

const DistributionChart: React.FC<DistributionChartProps> = ({ title, data }) => {
  return (
    <Card title={title} style={{ borderRadius: '12px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', border: '1px solid #e5e7eb' }}>
      <Space size="large" style={{ width: '100%', justifyContent: 'space-around' }}>
        {data.map(item => (
          <div key={item.label} style={{ textAlign: 'center' }}>
            <Progress type="dashboard" percent={item.percent} strokeColor={item.color} />
            <Text type="secondary">{item.label}</Text>
          </div>
        ))}
      </Space>
    </Card>
  );
};

export default DistributionChart;
