import React from "react";

const FilterByName = (props) => {
  const handleChange = (event) => {
    props.handleFilter({
      value: event.target.value,
      key: "name",
    });
  };

  return (
    <>
      {/* <label htmlFor="name">Filtrar por nombre</label> */}
      <input
        className="inputname"
        type="text"
        placeholder="Filtrar por nombre"
        value={props.filterName}
        name="name"
        id="name"
        onChange={handleChange}
      />
    </>
  );
};
export default FilterByName;
