import { render } from "@testing-library/react";
import { Link } from "@/components/Link";
import "jest-styled-components";

// test("it test props", () => {
//   const tree = renderer.create(<Link />).toJSON();
//   expect(tree).toHaveStyleRule("color", "red");
// });

test("it test props", () => {
  const { container } = render(<Link />);
  expect(container.firstChild).toHaveStyleRule("color", "red");
});
