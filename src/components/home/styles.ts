import styled from "styled-components";
import { ConvertToRem } from "../../util/pxToRemConverte";


export const Main = styled.main`
padding-bottom: ${ConvertToRem(100)};

@media (max-width: ${ConvertToRem(420)}) {
  
  padding-bottom: ${ConvertToRem(50)};
  
}

`


export const TextTop1 = styled.p`
text-align: center;
font-style: normal;
font-weight: 500;
font-size: ${ConvertToRem(16)};
line-height: ${ConvertToRem(20)};
padding: ${ConvertToRem(20)} 0;
color: ${props => props.theme.colors.white};
background-color: ${props => props.theme.colors["black-light"]};
`


export const TextTop2 = styled.p`
text-align: center;
padding: ${ConvertToRem(15)} 0;
font-style: normal;
font-weight: 600;
font-size: ${ConvertToRem(24)};
line-height: ${ConvertToRem(29)};
`


export const ContainerImg = styled.div`
padding: 0 ${ConvertToRem(100)};
background-image: linear-gradient(rgba(24, 24, 24, .6), rgba(24, 24, 24, .6)), url( "/assets/images/wallpaper.jpeg" );
height: ${ConvertToRem(378)};
background-repeat: no-repeat;
background-size: cover;
background-position: center;
display: flex;
align-items: center;


@media (max-width: ${ConvertToRem(420)}) {
  
  padding: 0 ${ConvertToRem(20)};
  height: ${ConvertToRem(250)};
  
}

`


export const WrapperContainerImgContent = styled.div`
color : ${props => props.theme.colors.white};

width: 60%;

h1 {
  font-style: normal;
  font-weight: 600;
  font-size: ${ConvertToRem(48)};
  line-height: ${ConvertToRem(59)};
}
p {
  font-style: normal;
  font-weight: 500;
  font-size: ${ConvertToRem(24)};
  line-height: 160%;
}



@media (max-width: ${ConvertToRem(420)}) {
  width: 100%;
  
  h1 {
    font-size: ${ConvertToRem(24)};
  }
  
  p {
    font-size: ${ConvertToRem(14)};
  }
  
  
}

`


export const WrapperDestaque = styled.div`
padding: ${ConvertToRem(70)} ${ConvertToRem(20)};
text-align: center;


p{
  font-style: normal;
  font-weight: 600;
  font-size: ${ConvertToRem(32)};
  line-height: ${ConvertToRem(39)};
  margin-bottom: ${ConvertToRem(17)};
}

span {
  font-style: normal;
  font-weight: 500;
  font-size: ${ConvertToRem(20)};
  line-height: ${ConvertToRem(24)};
}


@media (max-width: ${ConvertToRem(420)}) {
  
  p{
    font-size: ${ConvertToRem(28)};
    line-height: 196.19%;
  }
  
  span {
    font-size: ${ConvertToRem(16)};
    line-height: 180%;
  }
}

`


export const WrapperTenis = styled.div`

padding: 0 ${ConvertToRem(100)};
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: ${ConvertToRem(40)} ${ConvertToRem(20)};



@media (max-width: ${ConvertToRem(420)}) {
  
  padding: 0 ${ConvertToRem(20)};
  display: flex;
  flex-direction: column;
  gap: ${ConvertToRem(30)} 0;
  
  
  
}

`


export const Footer = styled.footer`
background-color: ${props => props.theme.colors["black-light"]};
height: ${ConvertToRem(60)};
color: ${props => props.theme.colors.white};


p{ 
  text-align: center;
  line-height: 60px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  
}

`