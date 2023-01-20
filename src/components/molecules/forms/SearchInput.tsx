import React from "react";
import "../../../styles/navbar.scss";

interface IProps {
  placeholder: string;
  onClick: () => void;
}

const SearchInput: React.FC<IProps> = ({ placeholder, onClick }) => {
  return (
    <div className="search_input_container">
      <input
        type="text"
        className="searc_input_wrapper"
        placeholder={placeholder}
      />
      <div className="search_icon_bg" onClick={onClick}>
        <img src="/assets/icons/search_icon.svg" alt="search_icon" />
      </div>
    </div>
  );
};

export default SearchInput;
