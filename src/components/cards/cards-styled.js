import styled from "styled-components"

export const ContainerCards = styled.div`
display: grid;
max-width: 1440px;
width: 100%;
margin: 10px;
margin-top: 20px;
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
gap: 8px;
`
export const InfoCard = styled.div`
display: flex;
padding: 20px;
flex-direction: column;
background-color:${({theme})=> theme.cardColor};
border-radius: 15px;
box-shadow: 0 2px 4px rgba(0,0,0,0.1);

&:hover{
  box-shadow: 2px 2px 4px ${({theme})=>theme.boxShadowCard};
}

`
export const ContainerInfo = styled.div`
display: flex;

.title-description{
    text-align: start;
    padding-left:20px ;
    margin-top: -20px;
   h2{
    color: ${({theme}) => theme.h2}
    ;
   }
    p{
        margin-top: -20px;
        width: 300px;
        color: ${({theme})=>theme.p};
    }

}
`

export const ContainerButton = styled.div`
display: flex;
display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  button {
    padding: 8px 16px;
    font-size: 15px;
    font-weight: 500;
    background-color:transparent;
    color: ${({theme})=>theme.btnRemove};
    border: 1px solid ${({theme})=>theme.btnRemove};
    border-radius: 20px;
    cursor: pointer;
  }
`;

// Estilo del switch toggle
export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;

  input {
    position: absolute;  
    top: 0;
    left: 0;
    width: 100%;         
    height: 100%;       
    opacity: 0;         
    margin: 0;          
    cursor: pointer;    
    z-index: 2;         
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 24px;
  z-index: 1;

  &::before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + & {
    background-color:hsl(3, 77%, 44%);
  }

  input:checked + &::before {
    transform: translateX(26px);
  }
`;


