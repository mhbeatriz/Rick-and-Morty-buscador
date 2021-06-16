import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

const Filters = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form onSubmit={handleForm}>
        <FilterByName
          handleFilter={props.handleFilter}
          filterName={props.filterName}
        />
        <FilterBySpecies
          handleFilter={props.handleFilter}
          filterSpecies={props.filterSpecies}
        />
      </form>
    </section>
  );
};

export default Filters;
