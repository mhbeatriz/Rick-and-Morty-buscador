import React from "react";
import FilterByName from "./FilterByName";

const Filters = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form onSubmit={handleForm}>
        <FilterByName handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};

export default Filters;
