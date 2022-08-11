import { FC } from "react";
import styles from "@styles/Home.module.css";
import Logo from "./Logo";

const Header: FC = () => {
  return (
    <header>
      <nav className="nav">
        <div className={styles.logo}>
          <Logo />
        </div>
        <a href="#" className="fs-16-20 bg-black fw-400 txt-white btn">
          ANALYZE ASAs
        </a>
      </nav>
      <h1 className={`fs-36-45 fw-500 ${styles.heading1}`}>
        List of Algorand Standard Assets on ASAlytics
      </h1>
    </header>
  );
};

export default Header;
