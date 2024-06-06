import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, { wrapper: MemoryRouter })
}

test('wraps content in a div with "navbar" class', () => {
  const { container } = renderWithRouter(<NavBar />);
  expect(container.querySelector(".navbar")).toBeInTheDocument();
});

test("renders a Home <NavLink>", () => {
  renderWithRouter(<NavBar />, { route: '/' });
  const a = screen.getByText(/Home/);

  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/");

  fireEvent.click(a);

  expect(a.classList).toContain("active");
});

test("renders an Actors <NavLink>", () => {
  renderWithRouter(<NavBar />, { route: '/actors' });
  const a = screen.getByText(/Actors/);

  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/actors");

  fireEvent.click(a);

  expect(a.classList).toContain("active");
});

test("renders a Directors <NavLink>", () => {
  renderWithRouter(<NavBar />, { route: '/directors' });
  const a = screen.getByText(/Directors/);

  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/directors");

  fireEvent.click(a);

  expect(a.classList).toContain("active");
});
