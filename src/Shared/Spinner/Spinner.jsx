import React from 'react';
import {TailSpin} from 'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = () => {
    return (
        <TailSpin
  height="80"
  width="1350"
  color="blue"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    );
};

export default Spinner;