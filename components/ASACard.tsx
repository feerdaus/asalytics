import Image from "next/image";
import { FC } from "react";
import styles from "@styles/Home.module.css";

interface ASACardProps {
  name: string;
  available: boolean;
  logo: string | null | undefined;
}

const ASACard: FC<ASACardProps> = ({ name, available, logo }) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.card_logo} mb-8`}>
        {logo && (
          <Image
            src={logo}
            alt={`${name} logo`}
            layout="responsive"
            height={44}
            width={44}
          />
        )}
      </div>
      <p className="mb-8 fs-24-30 fw-500">{name}</p>
      <span
        className={`fw-400 fs-12-15 txt-white ${styles.card_status} ${
          available ? "bg-green" : "bg-red"
        }`}
      >
        {available ? "Available" : "Unavailable"}
      </span>
    </div>
  );
};

export default ASACard;
