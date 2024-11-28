import styled,{css}  from 'styled-components';

type ButtonVariant ='primary' | 'secondary' | 'danger'| 'success'


interface ButtonContainerProps{

 variant:ButtonVariant;
}

const ButtonVariant = {
  primary: 'purple',
  secondary:'orange',
  danger :  'red',
  success: 'green'
}
export const ButtonContainer = styled.button<ButtonContainerProps>`
width:100px ;
height: 40px ;


 ${props =>{
  return css `background-color:${ButtonVariant[props.variant]}`
 }}
`