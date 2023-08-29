import classes from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div class={classes["has-search"]}>
      <input
        type="text"
        class="form-control"
        placeholder="Search some stocks"
      />
      <div class="input-group-append">
        <button class="btn btn-secondary" type="button">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
