import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string,
      "white-200": string,
      gray: string,
      "black-light": string
    }
  }
}
