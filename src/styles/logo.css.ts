import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "./theme.css";

const commonStyles = style({
  width: "20rem",
  borderRadius: vars.border.radius
});

export const logoStyles = styleVariants({
  white: [
    commonStyles,
    {
      color: vars.colors.white
    }
  ],
  black: [
    commonStyles,
    {
      color: vars.colors.black
    }
  ]
});
