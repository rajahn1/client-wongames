import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const headingStyles = style({
  fontSize: vars.font.sizes.xxlarge,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: vars.font.sizes.xlarge
    }
  }
});

export const headingLine = styleVariants({
  lineBottom: {
    position: "relative",
    marginBottom: vars.spacings.medium,
    ":after": {
      position: "absolute",
      left: 0,
      bottom: "-1rem",
      content: "",
      width: "5rem",
      borderBottom: `0.5rem solid ${vars.colors.primary}`
    }
  },
  lineLeft: {
    borderLeft: `0.7rem solid ${vars.colors.secondary}`,
    paddingLeft: vars.spacings.xxsmall
  },
  none: {
    border: 0,
    padding: 0,
    marginBottom: 0
  }
});

export const headingColor = styleVariants({
  white: {
    color: vars.colors.white
  },
  black: {
    color: vars.colors.black
  }
});
