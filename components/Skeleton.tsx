import { FC } from "react";
import styles from "@styles/Home.module.css";

const Skeleton: FC = () => {
  return <div className={`animated-background ${styles.card}`} />;
};

export default Skeleton;
