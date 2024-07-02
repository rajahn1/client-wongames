type ButtonProps = {
  label: string;
  size?: keyof typeof buttonStyles;
};
import { buttonStyles } from "@/styles/button.css";

export const Button = (props: ButtonProps) => <button className={`${buttonStyles[props.size ?? "large"]}`}>{props.label}</button>;
