import { useState } from "react";
import PropTypes from  'prop-types'
import Icon from "../../assets/Icon.png";
import {SecondContainer, RingsMovies, Finter } from "./styles";
import { useEffect } from "react";

function Header({docs,setFilterDocs}) {
  const [nameInput,setNameInput]=useState("")

  useEffect(()=>{
    const filterDocs=docs.filter(doc=>doc.name.toUpperCase().includes(nameInput.toUpperCase()))
    setFilterDocs(filterDocs)
  },[docs, nameInput, setFilterDocs])


  function handleChange(e){
    setNameInput(e.target.value)
  }



  return (
    <>
      <SecondContainer>
        <img src={Icon} alt="icon" />
        <p>Senior Frontend Test</p>
      </SecondContainer>
      <RingsMovies>
        <Finter>
          <h1>Lord of the Rings Movies</h1>
          <p>Ave. movie runtime: xxx min</p>
          <p>Ave. movie budget: $XXM</p>
        </Finter>
        <input onChange={handleChange} type="text" placeholder="Finter movies by name" />
      </RingsMovies>
    </>
  );
}
Header.propTypes={
  docs:PropTypes.array,
  setFilterDocs:PropTypes.func
}

export default Header;
