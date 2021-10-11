import React from "react";
import fakeData from "../../assets/fakeData";

const Manage = () => {
  const styles = {
    width: "300px",
    padding: "8px",
    fontSize: "16px",
    margin: "50px",
  };

  console.log(fakeData[0]);

  const handleGet = () => {
    fetch(`http://localhost:5000/`).then((res) => {
      console.log(JSON.parse(res));
    });
  };

  const handleUpload = () => {
    fetch(`http://localhost:5000/addProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fakeData),
    });
    // .then((res) => {
    //   console.log(res);
    // });
  };

  return (
    <div>
      <button onClick={handleUpload} style={styles}>
        Upload products
      </button>

      <br />

      <button onClick={handleGet} style={styles}>
        Get products
      </button>
    </div>
  );
};

export default Manage;
