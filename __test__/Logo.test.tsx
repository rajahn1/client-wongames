import { Logo } from "@/components/Logo";
import { render, screen } from "@testing-library/react";

jest.mock("../src/styles/logo.css", () => ({
  logoWrapperColors: {
    black: "mockBlackClassName",
    white: "mockWhiteClassName"
  },
  logoWrapperSizes: {
    large: "mockLarge",
    normal: "mockNormal"
  }
}));

describe("<Logo />", () => {
  it("should render a black label by default", () => {
    render(<Logo />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass("mockBlackClassName");
  });
});

describe("<Logo />", () => {
  it("should render a white label", () => {
    render(<Logo textColor="white" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass("mockWhiteClassName");
  });
});

describe("<Logo />", () => {
  it("should render a black label when textColor is undefined", () => {
    render(<Logo textColor={undefined} />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass("mockBlackClassName");
  });
});

describe("<Logo />", () => {
  it("should render a normal size logo by default", () => {
    render(<Logo />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass("mockNormal");
  });
});

describe("<Logo />", () => {
  it("should render a normal size logo", () => {
    render(<Logo size="normal" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass("mockNormal");
  });
});

describe("<Logo />", () => {
  it("should render a bigger logo", () => {
    render(<Logo size="large" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass("mockLarge");
  });
});
