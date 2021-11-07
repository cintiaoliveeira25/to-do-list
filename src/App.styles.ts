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

export const Titulo = styled.h1`
  color: #fb3640;
  font-size: 40px;
  text-align: center;
  padding-bottom: 20px;
`;

export const NewItem = styled.div`
  width: 50%;
`;

export const Image = styled.div`
  img {
    max-width: 400px;
  }
`;

export const AreaList = styled.div`
  margin: auto;
  width: 78%;
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

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  position: absolute;
  color: white;
  z-index: 99;
  top: 40%;
  width: 78%;
  height: 60px;
  border-radius: 5px;

  input {
    width: 50%;
    height: 50%;
    margin-left: 15px;
    font-size: 18px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    color: #1A1919;
  }
`;

export const ModalIcon = styled.div`
  display: flex;
  width: 8%;
  margin-right: 10px;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;