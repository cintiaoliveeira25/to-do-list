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
  @media screen and (max-width: 1280px) {
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    padding: 50px 0;
  }
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
    @media screen and (max-width: 1280px) {
    max-width: 200px;
  }
  }
`;

export const AreaList = styled.div`
  margin: auto;
  width: 78%;
  padding: 0 20px;
  color: white;
  border-width: 5px;
  border-style: solid;
  border-image: linear-gradient(to bottom, red, rgba(0, 0, 0, 0)) 1 100%;
`;

export const OpenModal = styled.div``;

export const ModalEdit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  position: absolute;
  color: white;
  z-index: 99;
  @media screen and (max-width: 1280px) {
    top: 80%;
  }
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
    border-bottom: 1px solid rgba(17, 17, 73, 0.308);
  }
`;

export const ModalDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  position: absolute;
  z-index: 99;
  @media screen and (max-width: 1280px) {
    top: 80%;
  }
  width: 78%;
  height: 60px;
  border-radius: 5px;

  p {
    width: 70%;
    height: 50%;
    color: black;
    padding-top: 5px;
    margin-left: 15px;
    font-size: 18px;
  }
`;

export const ModalIcon = styled.div`
  display: flex;
  width: 6%;
  margin-right: 10px;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  @media screen and (max-width: 1280px) {
    width: 10%;
    margin-right: 20px;
  }
`;
