import styled from "styled-components";

export const Container = styled.div`
  background-color: #e2e2e2;
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  margin: auto;
  padding: 50px;
`;

export const NemItem = styled.div`
  width: 50%;
`;

export const Image = styled.div`
  img {
    max-width: 400px;
  }
`;

export const AreaList = styled.div`
  margin: auto;
  width: 82%;
  padding: 0 20px;
  color: white;
  border-width: 5px;
  border-style: solid;
  border-image: 
    linear-gradient(
      to bottom, 
      red, 
      rgba(0, 0, 0, 0)
    ) 1 100%;
`;

export const Titulo = styled.h1`
  color: #fb3640;
  font-size: 40px;
  text-align: center;
  padding-bottom: 20px;
`;
