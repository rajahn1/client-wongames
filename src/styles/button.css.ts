import { vars } from "./theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

const commonButtonStyle = style({
  borderRadius: vars.border.radius,
  background: "linear-gradient(180deg, rgba(242,49,49,1) 5%, rgba(255,95,95,1) 40%, rgba(240,98,192,1) 90%)",
  color: vars.colors.white,
  padding: vars.spacings.xxsmall,
  width: "380px "
});

export const buttonStyles = styleVariants({
  large: [
    commonButtonStyle,
    {
      width: "380px"
    }
  ],
  medium: [
    commonButtonStyle,
    {
      width: "145px"
    }
  ],
  small: [
    commonButtonStyle,
    {
      width: "100px"
    }
  ]
});
