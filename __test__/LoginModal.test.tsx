import { LoginModal } from "@/components/LoginModal";
import { render, screen } from "@testing-library/react";

jest.mock("../src/styles/button.css", () => ({
  buttonStyles: {
    large: "mockLarge",
    medium: "mockMedium",
    small: "mockSmall"
  }
}));

describe("<LoginModal />", () => {
  it("should render the heading", () => {
    render(<LoginModal />);
    expect(screen.getByRole("heading", { name: /Entrar/i })).toBeInTheDocument();
  });
});
