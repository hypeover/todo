import styled from 'styled-components'

export const WelcomePageStyle = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: white;
    margin: 0;
    color: white;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const WelcomeText = styled.h1`
    font-weight: 600;
    font-size: 5rem;
    margin: 0;
    margin: 50px 0 0 0;
    color: #3b3b3a;
`

export const WelcomeInput = styled.input`
    border: none;
    border-bottom: solid 2px #3b3b3a;
    background-color: transparent;
    font-size: 2rem;
    outline: none;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 150px 0 0 0;
    color: #3b3b3a;
    font-weight: 500;

    ::placeholder {
        color: #3b3b3a;
    }
`
