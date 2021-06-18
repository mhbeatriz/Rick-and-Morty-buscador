import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByLocation from "./FilterByLocation";

const Filters = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className="form-container">
      <form onSubmit={handleForm} className="form">
        <FilterByName
          handleFilter={props.handleFilter}
          filterName={props.filterName}
        />
        <FilterBySpecies
          handleFilter={props.handleFilter}
          filterSpecies={props.filterSpecies}
        />
        <FilterByLocation
          handleFilter={props.handleFilter}
          filterLocation={props.filterLocation}
        />
      </form>
    </section>
  );
};

export default Filters;
