type ButtonProps = {
  label: string;
  size?: "small" | "medium" | "large";
};
import { buttonStyles } from "@/styles/button.css";
import { themeClass } from "@/styles/theme.css";

export const Button = (props: ButtonProps) => <button className={`${themeClass} ${buttonStyles[props.size ?? "large"]}`}>{props.label}</button>;
