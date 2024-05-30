import { vars } from "./theme.css";
import { style } from "@vanilla-extract/css";

export const inputWrapperStyle = style({
  position: "relative",
  width: 250,
  height: 40,
  display: "inline-block"
});

export const input = style({
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  padding: vars.spacings.xxsmall,
  backgroundColor: vars.colors.lightGray,
  paddingLeft: vars.spacings.large
});

export const icons = style({
  position: "absolute",
  top: "30%",
  left: "5%",
  width: "1.4rem"
});
