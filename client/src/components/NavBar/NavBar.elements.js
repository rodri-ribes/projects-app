import styled from "styled-components";


export const NavbarContainer = styled.div`
    width: 100%;
    height: 9vh;
    min-height: 9vh;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: black;
    margin-bottom: 50px;
    `;


export const NavbarWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1300px;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 968px){
        justify-content: flex-end;
        margin-right: 1rem;
    }
`;

export const IconLogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    font-family: "Oswald";
    font-size: 2rem;
    color: #ebc88b;

    .Link{
        text-decoration: none;
        color: #ebc88b;
    }
    @media screen and (max-width: 968px){
        width: 100%;
        margin-left: 20px;
    }
`;


export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 968px){
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 70px;
        left: ${({ click }) => (click ? 0 : "-100%")};
        flex-direction: column;
        transition: 0.5s all ease-in;
        background-color: #008398;
    }
    `;

export const MenuItem = styled.li`
    height: 100%;
    padding: 0.5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-family: "Oswald";
    font-weight: 400;
    cursor: pointer;
    
    &:hover{
        border-bottom: 0.3rem solid #676767;
        transition: 0.4s ease-in;
    }
    
    @media screen and (max-width: 968px){
        width: 100%;
        height: 100px;
        position: relative;
        bottom: 100px;
        margin: 1rem 0;
        &:hover{
            border-bottom: none
        }
    }
    `;

export const MenuItemLink = styled.div`
    color: #ebc08b;
    font-size: 1.5rem;
    
    div{
        display: flex;
    }
    
    div a{
        text-decoration: none;
        color: white;
    }

    svg{
        display: none;
    }
    @media screen and (max-width: 968px){ 
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
        display: flex;
        
        svg{
            display: flex;
            margin-right: 1rem;
            text-align: center;
            color: black;
            font-size: 3rem;
        }
        div{
            width: auto;
            height: 100%;
            align-items: center;
        }
    }
`;

export const IconLogoMovile = styled.div`
    display: none;

    @media screen and (max-width: 968px){
        display: flex;
        color: #ebebeb;
        font-size: 2rem;
        padding-right: 15px;
    }
`;