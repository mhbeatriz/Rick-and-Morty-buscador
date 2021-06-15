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
      <label htmlFor="name">Filtrar por nombre</label>
      <input
        type="text"
        // value={props.name}
        name="name"
        id="name"
        onChange={handleChange}
      />
    </>
  );
};
export default FilterByName;
