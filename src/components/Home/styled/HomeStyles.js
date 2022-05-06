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

export const MainPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`

export const NavBar = styled.div`
    height: 100vh;
    width: 300px;
    background-color: rgba( 76, 52, 226, 0.75 );
    display: flex;
    position: relative;
    flex-direction: column;
    box-sizing: border-box;
    padding: 30px 30px;
    text-align: left;
`

export const NameText = styled.p`
    color: white;
    word-wrap: break-word;
    font-size: 2rem;
    margin: 0;
    font-weight: 500;
`

export const LogoutButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
margin: 25px 0 5px 0;
color: #4c34e2;
font-weight: 600;
font-size: 1.3rem;
border: solid 3px white;
border-radius: 15px;
box-sizing: border-box;
padding: 5px 20px;
position: fixed;
overflow: hidden;
z-index: 1;
fill: #82859C;
transition: 0.2s;
cursor: pointer;
background-color: white;
width: 130px;
bottom: 30px;


:hover {
  transition: 0.5s;
  border: solid 3px #4c34e2;
  color: white;
  fill: white;
}

::after {
  content: '';
  display: block;
  position: absolute;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  transform: translate(-100px,-75px);
  background-color: #4c34e2;
  transition: 0.5s;
  z-index: -1;
  opacity: 0;
}

::before {
  content: '';
  display: block;
  position: absolute;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  transform: translate(100px,75px);
  background-color: rgba(74,0,224,1);
  transition: 0.5s;
  z-index: -1;
  opacity: 0;
}

:hover::after {
  content: '';
  display: block;
  position: absolute;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  transform: translate(0px,0px);
  background-color: #4c34e2;
  opacity: 1;
}

:hover::before {
  content: '';
  display: block;
  position: absolute;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  transform: translate(0px,0px);
  background-color: rgba(74,0,224,1);
  opacity: 1;
}
`

export const RestPage =  styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
` 