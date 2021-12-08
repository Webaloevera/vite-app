import React from "react";
import { cleanup, screen, render } from "@testing-library/react";
import Footer from "./Footer";

afterEach(cleanup);


test("Blyat", () => {
    render(<Footer />);
    const copyright = screen.getByTestId('copyright')
    expect(copyright).toBe();
});