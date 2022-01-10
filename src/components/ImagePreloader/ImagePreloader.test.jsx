import React from "react";
import { cleanup, screen, render } from "@testing-library/react";
import ImagePreloader from "./ImagePreloader";

afterEach(cleanup);

test("Test src", () => {
  const url = "https://memepedia.ru/wp-content/uploads/2018/07/cover-3-1.jpg";
  render(<ImagePreloader imageUrl={url} />);
  setTimeout(() => expect(screen.getByRole("img").src).toBe(url), 2000);
});

test("Test LOADING", () => {
  render(
    <ImagePreloader src="https://memepedia.ru/wp-content/uploads/2018/07/cover-3-1.jpg" />
  );
  expect(screen.getByTestId("loading").classList.contains("loading")).toBe(
    true
  );
});

test("Test LOADED", () => {
  render(
    <ImagePreloader src="https://memepedia.ru/wp-content/uploads/2018/07/cover-3-1.jpg" />
  );
  setTimeout(() => expect(screen.getByTestId("loaded")).toBe(true), 2000);
});

test("Test FAILED", () => {
  render(
    <ImagePreloader src="https://www.google.com/images/branding/googlelogo/2x/go23oglelogo_color_150x54d.png" />
  );
  setTimeout(() => expect(screen.getByTestId("failed").classList.contains("failed").toBe(true)), 2000);
});
