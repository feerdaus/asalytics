import { FC } from "react";

interface SkeletonProps {
  width?: number;
  height?: number;
}

const Skeleton: FC<SkeletonProps> = ({ width = 304, height = 185 }) => {
  return <div style={{ width, height }} className="animated-background" />;
};

export default Skeleton;
