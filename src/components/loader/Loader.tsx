import React from "react";
import { Bars } from "react-loader-spinner";
import s from "../loader/Loader.module.css";

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <div className={s.loader}>
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={loading}
      />
    </div>
  );
};

export default Loader;
