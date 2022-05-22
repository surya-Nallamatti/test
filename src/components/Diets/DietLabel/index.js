import React from "react";
import styles from "./DietLabel.module.scss";
const Typography = React.lazy(() => import("components/Typography"));

export const DietLabel = ({ title, count }) => (
  <div className={styles.diet_label__base}>
    <Typography variant="body_bold">{title}:</Typography>
    <Typography>{count ? Number(count).toLocaleString() : 0}</Typography>
  </div>
);

export default DietLabel;
