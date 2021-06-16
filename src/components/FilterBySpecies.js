import React from "react";

const FilterBySpecies = (props) => {
  const handleChange = (event) => {
    props.handleFilter({
      value: event.target.value,
      key: "species",
    });
  };

  return (
    <>
      {/* <label htmlFor="species">Filtrar por especie</label> */}
      <input
        className="inputspecie"
        type="text"
        placeholder="Filtrar por especie"
        value={props.filterSpecies}
        name="species"
        id="species"
        onChange={handleChange}
      />
    </>
  );
};
export default FilterBySpecies;
