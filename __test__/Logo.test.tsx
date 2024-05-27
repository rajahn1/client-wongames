import { render, screen } from "@testing-library/react";
import { Logo } from "@/components/Logo";

jest.mock("../src/styles/logo.css", () => ({
  logoStyles: {
    black: "mockBlackClassName",
    white: "mockWhiteClassName"
  }
}));

describe("<Logo />", () => {
  it("should render a black label by default", () => {
    const { container } = render(<Logo textColor="black" />);
    expect(container.firstChild).toHaveClass("mockBlackClassName");
  });
});
