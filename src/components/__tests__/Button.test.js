import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

const defaultProps = { icon: "", text: "Some text", url: "", className: "" };

describe("Testing Button.js", () => {
  it("should be able to show the Button", () => {
    render(<Button {...defaultProps} />);
    const btn = screen.getByText(/Some text/i);

    expect(btn).toBeInTheDocument();
  });

  it("should be able to show the Button with another text", () => {
    const newProps = { ...defaultProps, text: "New text" };
    render(<Button {...newProps} />);
    const btn = screen.getByText(/New text/i);

    expect(btn).toBeInTheDocument();
  });
});
