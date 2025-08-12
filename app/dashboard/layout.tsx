"use client";

// import React from "react";

// import { Layout, Menu, Avatar, Dropdown, Space, Typography } from "antd";
// import {
//   DashboardOutlined,
//   HistoryOutlined,
//   SettingOutlined,
//   UserOutlined,
//   LogoutOutlined,
// } from "@ant-design/icons";
// import { useState } from "react";

// const { Header, Sider, Content } = Layout;
// const { Title } = Typography;

// export default function AppLayout({
//   children,
//   role,
// }: {
//   children: React.ReactNode;
//   role: "manager" | "careworker";
// }) {
//   const [collapsed, setCollapsed] = useState(false);

//   const menuItems = [
//     { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard",
//      { key: "history", icon: <HistoryOutlined />, label: "History" },
//     { key: "settings", icon: <SettingOutlined />, label: "Settings" },
//   ];

//   const userMenu = (
//     <Menu
//       items={[
//         { key: "profile", label: "Profile", icon: <UserOutlined /> },
//         { type: "divider" },
//         { key: "logout", label: "Logout", icon: <LogoutOutlined /> },
//       ]}
//     />
//   );

//   return (
//     <Layout style={{ minHeight: "100vh" }}>
//       {/* Sidebar */}
//       <Sider
//         collapsible
//         collapsed={collapsed}
//         onCollapse={setCollapsed}
//         width={220}
//         style={{
//           background: "#E6F4EA", // light mint/teal color from screenshot
//         }}
//       >
//         <div
//           style={{
//             height: 64,
//             margin: 16,
//             textAlign: "center",
//             fontWeight: "bold",
//             color: "#006d4c", // dark teal text color
//             fontSize: collapsed ? "1.2rem" : "1.5rem",
//           }}
//         >
//           {collapsed ? "L" : "Lief"}
//         </div>

//         <Menu
//           mode="inline"
//           items={menuItems}
//           style={{
//             background: "transparent", // keep mint background visible
//           }}
//         />
//            </Sider>

//       {/* Main Layout */}
//       <Layout>
//         {/* Header */}
//         <Header
//           style={{
//             background: "#fff",
//             padding: "0 24px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Title level={4} style={{ margin: 0 }}>
//             {role === "manager" ? "Manager Dashboard" : "Care Worker Dashboard"}
//           </Title>
//           <Dropdown overlay={userMenu} placement="bottomRight">
//             <Space style={{ cursor: "pointer" }}>
//               <Avatar
//                 style={{ backgroundColor: "#87d068" }}
//                 icon={<UserOutlined />}
//               />
//               {!collapsed && <span>Alex Manager</span>}
//             </Space>
//           </Dropdown>
//         </Header>

//         {/* Page Content */}
//         <Content style={{ margin: "16px", padding: 24, background: "#fff" }}>
//           {children}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// }

import React from "react";
import { Layout, Menu, Avatar } from "antd";
import {
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Sider, Content } = Layout;

const sidebarBg = "#FFFFFF"; // Exact color from your screenshot
const selectedColor = "#00C853"; // Green hex color

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        theme="dark"
        style={{
          background: sidebarBg,
        }}
      >
        <div
          style={{
            color: "green",
            fontSize: 22,
            fontWeight: "bold",
            padding: "10px",
            textAlign: "center",
          }}
        >
          Lief
        </div>

        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          style={{
            background: sidebarBg,
          }}
          items={[
            {
              key: "1",
              icon: <DashboardOutlined />,
              label: "Dashboard",
              style: { color: "black" },
            },
            {
              key: "2",
              icon: <UserOutlined />,
              label: "Profile",
              style: { color: "black" },
            },
            {
              key: "3",
              icon: <SettingOutlined />,
              label: "Settings",
              style: { color: "black" },
            },
          ]}
          onSelect={({ key }) => {
            // Change color of selected item
            const menuItems = document.querySelectorAll(
              ".ant-menu-item"
            ) as NodeListOf<HTMLElement>;
            menuItems.forEach((item) => {
              if (item.getAttribute("data-menu-id") === key) {
                item.style.background = selectedColor;
              } else {
                item.style.background = "transparent";
              }
            });
          }}
        />

        <div
          style={{
            textAlign: "center",
            padding: "16px",
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        ></div>
      </Sider>

      <Layout>
        <Content style={{ margin: "16px" }}>{children}</Content>
      </Layout>
    </Layout>
  );
}
