"use client"
import ClockLoader from "react-spinners/ClockLoader";

const override= {
    display: "block",
    margin: "20px auto",
    borderColor: 'red',
  };

function loading() {

  return (
    <div className="sweet-loading">
     

      <ClockLoader
        color={'red'}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default loading;
