import classes from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div className={classes["has-search"]}>
      <input
        type="text"
        className="form-control"
        placeholder="Search some stocks"
      />
      <div className="input-group-append">
        <button className="btn btn-secondary" type="button">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
