import { useState } from "react";
import PropTypes from "prop-types";
import Icon from "../../assets/Icon.png";
import { SecondContainer, RingsMovies, Finter } from "./styles";
import { useEffect } from "react";

function Header({ docs, setFilterDocs }) {
  const [nameInput, setNameInput] = useState("");
  const [runTime, setRunTime] = useState({
    time: null,
    budget: null,
  });

  useEffect(() => {
    const filterDocs = docs.filter((doc) =>
      doc.name.toUpperCase().includes(nameInput.toUpperCase())
    );
    setFilterDocs(filterDocs);

    const resultTime = filterDocs.reduce((acc, valorAtual) => {
      return acc + valorAtual.runtimeInMinutes;
    }, 0);

     filterDocs.length > 0 && setRunTime({
      time: resultTime / filterDocs.length,
      budget: filterDocs.reduce((acc, valorAtual) => {
        return acc + valorAtual.budgetInMillions;
      }, 0),
    });
  }, [docs, nameInput, setFilterDocs]);

  function handleChange(e) {
    setNameInput(e.target.value);
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
          <p>Ave. movie runtime:{runTime.time} min</p>
          <p>Ave. movie budget: ${runTime.budget}M</p>
        </Finter>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Finter movies by name"
        />
      </RingsMovies>
    </>
  );
}
Header.propTypes = {
  docs: PropTypes.array,
  setFilterDocs: PropTypes.func,
};

export default Header;
