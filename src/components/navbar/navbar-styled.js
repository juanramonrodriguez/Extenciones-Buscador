import styled from 'styled-components';

export const ContainerNavbar = styled.div`
    display: flex;
    margin-top: 40px;
    max-width: 1400px;
    width: 100%;
    height: 35px;
    justify-content: space-between;
    align-items: center;
    padding: 18px;
    background-color: ${({theme})=>theme.cardColor};
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    border-radius:20px;

    `;
export const ContainerLogo = styled.div`
    display: flex;
    width: 200px;
    height: auto;

`;    
export const ContainerModo = styled.div`
display: flex;
justify-content: end;
width: 100px;
height: auto;
margin-right: -8px;
img.sun{
    display: flex;
    position: relative;
    margin-left: 8px;
    
}

button{
    background-color: ${({theme})=>theme.btnDarkMode};
    border: none;
    border-radius: 20%;
    width: 50px;
    height: 50px;
    cursor: pointer;
}
    
`;  
export const ContainerTitle = styled.div`
    display: flex;
    margin-top: 50px;
    max-width: 1440px;
    width: 100%;
    height: 35px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
     @media (max-width: 645px) {
        flex-direction: column;
        height: 100px;
        margin-bottom: 50px;
    }
    

        
    
`;
export const Title = styled.div`
    display: flex;
    font-size: 20px;
    h2{
        color: ${({theme})=>theme.h2};
    }
   
`;
export const ContainerFilter = styled.div`
    display: flex;
    gap: 15px;
    button{
        border: 1px solid gray;
        color: ${({theme})=>theme.p};
        background-color: ${({theme})=>theme.cardColor};
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        border-top-left-radius:30px;
        border-bottom-left-radius:30px;
        width: 120px;
        height: 50px;
        font-size: 25px;
        cursor: pointer;
    }
    .isactive{
        color: ${({theme})=>theme.btnActiveFilter};
        width: 80px;
        background-color:hsl(3, 77%, 44%);
        font-size: 25px;
        border: none;
        cursor: pointer;
    }

   
`;
