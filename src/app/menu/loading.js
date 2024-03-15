"use client"
import { BeatLoader } from "react-spinners";

const override= {
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  height: '90vh',
  margin: "20px auto",
  borderColor: "#f95959"
  };

function loading() {

  return (
    <div className="sweet-loading">
     

      <BeatLoader
        color={"#f95959"}
        loading={loading}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default loading;
