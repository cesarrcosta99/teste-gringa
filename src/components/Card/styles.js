import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  max-width: 1008px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  margin-bottom: 100px;
`;

export const Container = styled.div`
  background-color: #abbbcc;
  margin-top: 32px;
  height: 160px;
  width: 240px;
  border: 1px solid #abbbcc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SegundoContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 9px;
  height: 185px;
  width: 240px;
  padding: 16px 16px 20px 16px;
  h1 {
    font-size: 18px;
    font-weight: 600;
  }

  .dolar {
    font-size: 14px;
  }

  .budgete {
    font-size: 12px;
    font-weight: 600;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .divisao {
    display: flex;
    flex-direction: column;
    padding-right: 31px;
  }
`;
