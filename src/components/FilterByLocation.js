import React from "react";

const FilterByLocation = (props) => {
  const handleChange = (event) => {
    props.handleFilter({
      value: event.target.value,
      key: "location",
    });
  };

  return (
    <>
      {/* <label htmlFor="name">Filtrar por nombre</label> */}
      <input
        className="inputlocation"
        type="text"
        placeholder="Filtrar por location"
        value={props.filterLocation}
        name="location"
        id="location"
        onChange={handleChange}
      />
    </>
  );
};
export default FilterByLocation;
