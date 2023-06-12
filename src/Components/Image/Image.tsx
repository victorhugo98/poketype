import React from "react";
import styles from './Image.module.css'
interface ImageProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: ImageProps) => {
  const [isLoading, setIsLoading] = React.useState(true);

  function handleIsLoading(e: React.ChangeEvent<HTMLImageElement>) {
    setIsLoading(false);
    e.target.style.opacity = '1'
  }

  return (
    <>
      {isLoading && <div className={styles.loading}></div>}
      <img
        onLoad={handleIsLoading}
        style={{ opacity: "0" }}
        src={src}
        alt={alt}
      ></img>
    </>
  );
};

export default Image;
