import { render, screen } from "@testing-library/react";
import { Button } from "@/components/Button";

jest.mock("../src/styles/button.css", () => ({
  buttonStyles: {
    large: "mockLarge",
    medium: "mockMedium",
    small: "mockSmall"
  }
}));

describe("<Button />", () => {
  it("should render a large Button by default", () => {
    const { container } = render(<Button label="Entrar" />);
    expect(container.firstChild).toContainHTML("Entrar");
    expect(container.firstChild).toHaveClass("mockLarge");
  });
});
