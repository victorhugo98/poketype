import React from "react";
import { PokeProps } from "../../Interfaces/Interfaces";
import styles from "./Button.module.css";
import Button from "./Button";
const Buttons = ({
  data,
  request,
}: {
  data: PokeProps;
  request: (url: string) => Promise<{ jsonResponse: any }>;
}) => {
  async function handleNextPage() {
    if (data.next) {
      const { jsonResponse } = await request(data.next);
    }
  }
  async function handlePreviousPage() {
    if (data.previous) {
      const { jsonResponse } = await request(data.previous);
    }
  }

  return (
    <div className={styles.buttonContainer}>
      <Button
        disabled={data.previous ? false : true}
        onClick={handlePreviousPage}
      >
        Previous
      </Button>
      
      <Button
        disabled={data.next ? false : true}
        onClick={handleNextPage}
      >
        Next
      </Button>
    </div>
  );
};

export default Buttons;
