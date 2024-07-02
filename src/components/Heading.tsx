export type HeadingProps = {
  children: string;
  color?: keyof typeof headingColor;
  border?: keyof typeof headingLine;
};

import { headingColor, headingLine, headingStyles } from "@/styles/heading.css";

export const Heading = ({ children, color = "white", border = "none" }: HeadingProps) => {
  return (
    <div>
      <h2 className={`${headingStyles} ${headingLine[border]} ${headingColor[color]}`}>{children}</h2>
    </div>
  );
};
