import { createTheme, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    vermelho: "#B22"
  }
});

export const signUp = style({
  backgroundColor: vars.color.vermelho
});
