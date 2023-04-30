import styled from "styled-components";
import { ConvertToRem } from "../../util/pxToRemConverte";



export const Container = styled.div`
background-color: ${props => props.theme.colors["white-200"]};
padding: ${ConvertToRem( 76 )} ${ConvertToRem(82)};

img {
  /* width: ${ConvertToRem(100)}; */
  width: 100%;
  display: block;
}




`