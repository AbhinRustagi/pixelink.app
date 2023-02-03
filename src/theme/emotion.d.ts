import { ColorPalette } from "./colors";

declare module "@emotion/react" {
  export interface Theme {
    colors: ColorPalette;
  }
}
