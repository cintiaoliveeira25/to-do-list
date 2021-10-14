import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps)=>(
    `
    display: flex;
    background-color: rgba(185, 185, 185, 0.863);
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-between;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }
    
    label {
        color: black;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    img {
        max-width: 28px;
        cursor: pointer;
    }
`
));
