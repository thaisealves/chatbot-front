import styled from "styled-components";
const Container = styled.div`
width: 100vw;
height : 80vh;
color: #000000; 
img{
    width: 40%;

}
> div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;    
}


`
const Forms = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 20%;
> * {
    width: 70%;
    height: 58px;
    box-shadow: 5px 5px 5px #888888;
}
button{
    background-color: #075e54;
    height: 50px;
}
input{
    border: 3px solid white;
    border-radius: 5px;
    box-sizing: border-box;

}
`


export { Container, Forms }