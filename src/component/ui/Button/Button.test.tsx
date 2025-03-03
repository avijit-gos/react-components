/** @format */

import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Test button component", () => {
  test("Rendering in UI", () => {
    render(
      <Button
        text='Default'
        varient='default'
        onClickHandler={() => alert("DEFAULT BUTTON")}
      />
    );
    const buttonElement = screen.getByText("Default");
    expect(buttonElement).toBeInTheDocument();
  });

  test("Button Click function", async () => {
    const onClickMock = vi.fn();
    render(
      <Button text='Click Me' varient='success' onClickHandler={onClickMock} />
    );
    const buttonElement = screen.getByRole("button", { name: "Click Me" });
    await userEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
