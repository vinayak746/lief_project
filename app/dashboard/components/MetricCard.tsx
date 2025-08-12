import React from 'react';
import { Card, Statistic, Typography } from 'antd';

const { Text } = Typography;

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
  note?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, color, note }) => {
  return (
    <Card style={{ height: '100%', borderRadius: '12px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', border: '1px solid #e5e7eb' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Text type="secondary">{title}</Text>
          <Statistic value={value} valueStyle={{ fontSize: '24px', fontWeight: 500 }} />
          {note && <Text type="secondary">{note}</Text>}
        </div>
        <div style={{ fontSize: '32px', color }}>
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default MetricCard;
