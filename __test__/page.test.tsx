import Home from "@/app/page";
import { render } from "@testing-library/react";

it("renders page", () => {
  const { container } = render(<Home />);
  expect(container).toContainHTML("Hello World");
});
