import React from "react";
import s from "../loadMore/LoadMore.module.css";

interface LoadMoreProps {
  handleClick: () => void;
}

const LoadMore: React.FC<LoadMoreProps> = ({ handleClick }) => {
  return (
    <div>
      <button className={s.loadMore} onClick={handleClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMore;
