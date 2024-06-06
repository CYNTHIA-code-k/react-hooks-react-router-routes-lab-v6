import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import routes from "../routes.js";

test('renders the Home component on route "/"', () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <RouterProvider router={MemoryRouter(routes)} />
    </MemoryRouter>
  );
  expect(screen.getByText(/Home Page/)).toBeInTheDocument();
});

test('renders the Actors component on route "/actors"', () => {
  render(
    <MemoryRouter initialEntries={["/actors"]}>
      <RouterProvider router={MemoryRouter(routes)} />
    </MemoryRouter>
  );
  expect(screen.getByText(/Actors Page/)).toBeInTheDocument();
});

test('renders the Directors component on route "/directors"', () => {
  render(
    <MemoryRouter initialEntries={["/directors"]}>
      <RouterProvider router={MemoryRouter(routes)} />
    </MemoryRouter>
  );
  expect(screen.getByText(/Directors Page/)).toBeInTheDocument();
});

test('renders the Movie component on route "/movie/:id"', async () => {
  const id = 1;
  render(
    <MemoryRouter initialEntries={[`/movie/${id}`]}>
      <RouterProvider router={MemoryRouter(routes)} />
    </MemoryRouter>
  );
  expect(await screen.findByText(/Doctor Strange/)).toBeInTheDocument();
});

test("renders an error page when given a bad URL", () =>{
  render(
    <MemoryRouter initialEntries={["/bad-route"]}>
      <RouterProvider router={MemoryRouter(routes)} />
    </MemoryRouter>
  );
  expect(screen.getByText(/Oops! Looks like something went wrong./)).toBeInTheDocument();
});
