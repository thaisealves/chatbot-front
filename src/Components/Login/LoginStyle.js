import styled from "styled-components";
const Container = styled.div`
width: 100%;
height : 80vh;
color: #000000;
display: flex;
justify-content: space-between;
img{
    width: 40%;

}
> div{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
}

`
const Forms = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 15px;
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
    margin-bottom: 10px;

}
`


export { Container, Forms }