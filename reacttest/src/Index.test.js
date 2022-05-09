import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("Header Image Test", () => {
  let emoji, buttons;

  beforeEach(() => {
    render(<App />);
    emoji = screen.getByText(/100/i);
  });
  test("Image must have src", () => {
    const img = screen.findAllByRole("img");
    expect(img.src !== "").toBeTruthy();
  });
  test("Header render test", () => {
    const header = screen.getByText(/Emoji Search/i);
    expect(header).toBeInTheDocument();
  });
  test("Emoji filter test", () => {
    const input = screen.getByPlaceholderText("Search");
    const inputText = "yum";
    userEvent.type(input, inputText);
    expect(emoji).not.toBeInTheDocument();
  });
  test("Emoji copy test", () => {
    expect(emoji.parentElement).toHaveAttribute("data-clipboard-text");
  });
});
