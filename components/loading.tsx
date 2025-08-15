import { Spin } from "antd";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Spin size="large" />
    </div>
  );
};

export default Loading;
