import { render } from "@testing-library/react";
import Icon from "./Icon";
import "@testing-library/jest-dom";

describe("Navbar Icon Component", () => {
  let container: HTMLElement;
  let svgElement: Nullable<Element>;

  beforeEach(() => {
    const rendered = render(
      <Icon isMenuOpen={false} menuClickHandler={() => {}} />
    );
    container = rendered.container;
    svgElement = container.querySelector(".ham");
  });

  it("renders correctly without issues", () => {
    expect(svgElement).toBeInTheDocument();
  });

  it("has no active class when isMenuOpen=false", () => {
    expect(svgElement).not.toHaveClass("active");
  });

  it("has no active class when isMenuOpen=true", () => {
    const { container } = render(
      <Icon isMenuOpen={true} menuClickHandler={() => {}} />
    );
    const svgElement = container.querySelector(".ham");
    expect(svgElement).toHaveClass("active");
  });
});
