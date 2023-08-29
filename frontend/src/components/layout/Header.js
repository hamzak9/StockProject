import { Fragment } from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <h1>
        SPA Dashboard
        <span>Team: Equity Explorers</span>
      </h1>
    </div>
  );
};

export default Header;
