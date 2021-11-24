import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #0a2463;
  border-radius: 9px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1280px) {
      min-width: 320px;
      margin-left: -70px;
    }
  
  input {
    border: 0px;
    background: transparent;
    outline: 0;
    font-size: 18px;
    flex: 1;
    padding: 10px;

  }

  button {
    color: #fff;
    font-size: 18px;
    width: 15%;
    padding: 10px;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    background-color: #3F3D56;
    border: 1px solid #3F3D56;
    cursor: pointer;
    @media screen and (max-width: 1280px) {
      width: 30%;
    }
  }
`;
