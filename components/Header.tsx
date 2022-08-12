import { FC } from "react";
import styles from "@styles/Home.module.css";
import Image from "next/image";

const Header: FC = () => {
  return (
    <header>
      <nav data-testid="nav" className="nav">
        <div className={styles.logo}>
          <Image
            src="https://ik.imagekit.io/4woq8zlkh/Asalytics/Header_Logo_PbOOcENNS.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660291324200"
            alt="Asalytics logo"
            width={152}
            height={71}
            layout="responsive"
          />
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
