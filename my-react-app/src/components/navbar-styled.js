import styled from 'styled-components';

export const ContainerNavbar = styled.div`
    display: flex;
    margin-top: 40px;
    width: 1440px;
    height: 35px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    border-radius:20px;
   
    `;
export const ContainerLogo = styled.div`
    display: flex;
    width: 100px;
    height: auto;
`;    
export const ContainerModo = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: hsl(0, 0%, 93%);
    border-radius: 20%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    
`;
export const SunModo = styled.div`
    visibility: hidden;display: none;
    width: 20px;
    height: 20px;
    
`;
export const MoonModo = styled.div`
    width: 20px;
    height: 20px;
    
`;  
export const ContainerTitle = styled.div`
    display: flex;
    margin-top: 50px;
    width: 1440px;
    height: 35px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
   
    
    
`;
export const Title = styled.div`
    display: flex;
    font-size: 20px;
   
`;
export const ContainerFilter = styled.div`
    display: flex;
    gap: 15px;
    button{
        background-color: #fff;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        border-top-left-radius:30px;
        border-bottom-left-radius:30px;
        width: 120px;
        height: 50px;
        border: 1px solid hsl(0, 0%, 78%);
        font-size: 25px;
         cursor: pointer;
    }
    .isactive{
        width: 80px;
        background-color:hsl(3, 77%, 44%);
        border: 1px solid hsl(0, 0%, 78%);
        color: hsl(0, 0%, 100%);
        font-size: 25px;
        cursor: pointer;
    }

   
`;
