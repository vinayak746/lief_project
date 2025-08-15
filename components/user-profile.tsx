import { Avatar, Button, Card, Typography } from "antd";
const { Text, Title } = Typography;

interface UserProfileProps {
  user: {
    picture?: string | null;
    name?: string | null;
    email?: string | null;
  };
}

const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <Card>
      <div className="flex flex-col items-center space-y-4">
        <Avatar size={64} src={user.picture} />
        <Title level={4}>Welcome, {user.name}!</Title>
        <Text type="secondary">{user.email}</Text>
        <a href="/api/auth/logout" className="w-full">
          <Button type="primary" danger block size="large">
            Log Out
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default UserProfile;
