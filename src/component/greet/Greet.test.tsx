/** @format */

import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet Component", () => {
  test("renders the greeting message with the given username", () => {
    render(<Greet username='John' />);
    const element = screen.getByText("Hello! John, how are you");
    expect(element).toBeInTheDocument();
  });
});
