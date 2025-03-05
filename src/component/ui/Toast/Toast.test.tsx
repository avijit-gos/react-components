/** @format */

import { render, screen } from "@testing-library/react";
import Toast from "./Toast";
import "@testing-library/jest-dom";

describe("Test Toast component:", () => {
  test("Test rendering toast component", () => {
    render(<Toast value={30} />);
    const toastElement = screen.getByText("30%");
    expect(toastElement).toBeInTheDocument();
  });

  test("Test with value 30 it shows color code #eb4d4b", () => {
    render(<Toast value={20} />);
    const toastElement = screen.getByText("20%");
    expect(toastElement).toBeInTheDocument();
    expect(toastElement.parentElement).toHaveClass("bg-[#eb4d4b]");
  });

  test("Test with value 80% it shows color code #2ed573", () => {
    render(<Toast value={80} />);
    const toastElement = screen.getByText("80%");
    expect(toastElement).toBeInTheDocument();
    expect(toastElement.parentElement).toHaveClass("bg-[#2ed573]");
  });
});
