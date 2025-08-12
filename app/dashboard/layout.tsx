"use client";

import React from 'react';
import { Layout, Menu, Avatar, Space, Typography, Badge, Input } from 'antd';
import type { MenuProps } from 'antd';
import {
  DashboardOutlined,
  HistoryOutlined,
  SettingOutlined,
  UserOutlined,
  LineChartOutlined,
  GlobalOutlined,
  BellOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { usePathname, useRouter } from 'next/navigation';
import { StyleProvider } from '@ant-design/cssinjs';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const managerMenuItems: MenuItem[] = [
  getItem('Dashboard', '/dashboard/manager', <DashboardOutlined />),
  getItem('Staff', '/dashboard/manager/staff', <UserOutlined />),
  getItem('Analytics', '/dashboard/manager/analytics', <LineChartOutlined />),
  getItem('Perimeter', '/dashboard/manager/perimeter', <GlobalOutlined />),
  getItem('Settings', '/dashboard/manager/settings', <SettingOutlined />),
];

const workerMenuItems: MenuItem[] = [
  getItem('Dashboard', '/dashboard', <DashboardOutlined />),
  getItem('History', '/dashboard/history', <HistoryOutlined />),
  getItem('Settings', '/dashboard/settings', <SettingOutlined />),
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isManager = pathname?.startsWith('/dashboard/manager');

  const menuItems = isManager ? managerMenuItems : workerMenuItems;

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    router.push(e.key);
  };

  const selectedKey = menuItems.find(item => pathname === item?.key)?.key as string || '';

  return (
    <StyleProvider hashPriority="high">
      <Layout style={{ minHeight: '100vh' }}>
      <Sider width={250} style={{ background: '#fff', borderRight: '1px solid #f0f0f0' }}>
        <div style={{ padding: '16px', textAlign: 'center', borderBottom: '1px solid #f0f0f0' }}>
          <Title level={4} style={{ margin: 0, color: '#1890ff', fontWeight: 'bold' }}>
            Lief
          </Title>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          style={{ borderRight: 0, paddingTop: '8px' }}
          items={menuItems}
          onClick={handleMenuClick}
        />
        <div style={{ position: 'absolute', bottom: '20px', width: '100%', padding: '0 20px' }}>
          <div style={{ padding: '12px', background: '#f0f2f5', borderRadius: '8px' }}>
            <Space>
              <Avatar style={{ backgroundColor: '#52c41a' }} icon={<UserOutlined />} />
              <div>
                <div style={{ fontWeight: '500' }}>{isManager ? 'Alex Manager' : 'Alex Worker'}</div>
                <div style={{ color: '#8c8c8c', fontSize: '12px' }}>{isManager ? 'Manager' : 'Worker'}</div>
              </div>
            </Space>
          </div>
        </div>
      </Sider>
      <Layout style={{ background: '#f7f8fc' }}>
        <Header style={{ background: '#fff', padding: '0 24px', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Input
                placeholder="Search..."
                prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                style={{ width: 300, borderRadius: '20px' }}
            />
            <Space align="center" size="large">
                <Badge count={5} overflowCount={4}>
                    <BellOutlined style={{ fontSize: '20px', color: '#555' }} />
                </Badge>
                <Space align="center">
                    <Avatar src="/images/avatars/thumb-1.jpg" icon={<UserOutlined />} />
                    <Text strong>{isManager ? 'Alex Manager' : 'Alex Worker'}</Text>
                </Space>
            </Space>
        </Header>
        <Content style={{ padding: '24px', margin: 0, overflow: 'initial' }}>
          {children}
        </Content>
        </Layout>
      </Layout>
    </StyleProvider>
  );
}
