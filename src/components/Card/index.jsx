import { Container,SegundoContainer,ContainerPrincipal } from "./styles";
import Vector from "../../assets/Vector.png";
import PropTypes from "prop-types";

function Card({ data }) {
  return (
    <ContainerPrincipal>
    
   {data.map(item=>(
    <div key={item._id}>
      <Container>
        <img src={Vector} alt="vector" />
      </Container>
      <SegundoContainer>
        <h1>{item.name}</h1>
        <p className="dolar">{item.budgetInMillions}</p>
        <p className="dolar">{item.boxOfficeRevenueInMillions}</p>
        <div className="flex">
            <div className="divisao">
            <h3 className="budgete">Budget</h3>
            <p className="dolar">{item.academyAwardNominations}</p>
            </div>
         <div className="divisao">
          <h3 className="budgete">Revenue</h3>
          <p className="dolar">{item.academyAwardWins}</p>
          </div>
        </div>
      </SegundoContainer>
      </div>
   ))}
      </ContainerPrincipal>
      
  );
}

Card.propTypes = {
  data: PropTypes.array
};
export default Card;
