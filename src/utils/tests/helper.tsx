import { themeClass } from "@/styles/theme.css";
import { RenderResult, render } from "@testing-library/react";

jest.mock("../../styles/logo.css", () => ({
  logoStyles: {
    black: "mockBlackClassName",
    white: "mockWhiteClassName"
  }
}));

export const renderWithTheme = (children: React.ReactNode): RenderResult => render(<div className={`${themeClass}`}>{children}</div>);
