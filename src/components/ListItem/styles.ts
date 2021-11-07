import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: ContainerProps) =>
    `
    display: flex;
    background-color: #fafafa;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
    align-items: center;
    justify-content: space-between;
    
    label {
        color: ${done ? "#e2e2e2" : "#1A1919"};
    }

    img {
        max-width: 28px;
        cursor: pointer;
    }
`
);

export const Checkbox = styled.div`
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .container input {
    opacity: 0;
    cursor: pointer;
    width: 25px;
    height: 25px;
    margin-right: 5px;
    text-align: center;
  }

  .checkmark {
    position: absolute;
    top: 9px;
    left: 5px;
    height: 25px;
    width: 25px;
    background-color: #e1e1e1;
  }

  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  .container input:checked ~ .checkmark {
    background-color: #fb3640;
    color: #fff;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
