import { Button } from "antd";

const AuthButtons = () => {
  return (
    <div className="flex flex-col space-y-4">
      <a href="/auth/login?returnTo=/dashboard" className="w-full">
        <Button type="primary" block size="large">
          Log In
        </Button>
      </a>
      <a href="/auth/signup?returnTo=/dashboard" className="w-full">
        <Button block size="large">
          Sign Up
        </Button>
      </a>
    </div>
  );
};

export default AuthButtons;
