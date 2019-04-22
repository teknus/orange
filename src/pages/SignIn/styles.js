import styled from "styled-components";
import Background from '../../assets/bg.jpg';


export const Container = styled.div `
    background: #F9F9F9;
    height: 1000px;
`;

export const Image = styled.div `
background-image: ${Background};
background-position:100px 200px; 
max-width: 800px;
max-height: 412px;
height:1000;
`;

export const FormContainer = styled.div `
    margin-left: 149px;
    margin-top: 35px;
    float:left;
    width: 400px;
    background: #FFFFFF;
    box-shadow: 2px 5px 5px 2px #9B9B9B;
`;


export const Form = styled.form `
position: relative;
width: 400px;
  padding:40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input{
    background-color: white;
    font-family: 'Open Sans Light';
    font-size: 15px;
    color: #4A4A4A;
    border: 1px solid #4A4A4A; 
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    margin-right: 15px;
    width: 100%;
  }`;

export const Icon = styled.img `
    width: 11pt;
    height: 11pt;
`;

export const LoginButton = styled.button`
    background: linear-gradient(to right,#AE23A9,#DC4E1B);
    font-family: 'Open Sans Semibold';
    color: #FFFFFF;
    font-size: 15px;
    border: none;
    height: 50px;
    width: 400px;
`;

export const RegisterButton = styled.button `
    background-color: white;
    font-family: 'Open Sans Semibold';
    color: #4A4A4A;
    font-size: 15px;
    border: 1px solid #9B9B9B; 
    height: 46px;
    width: 400px;
`;