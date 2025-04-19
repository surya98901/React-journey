import Header from "../Header";
import appStore from "../../utils/aapStore";
import { Provider } from "react-redux";
import { render, screen,fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("logo should be visible", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const logo = screen.getByRole("img");
  expect(logo).toBeInTheDocument();
});
it("login button should be visible", () => {
  // Fixed typo in description
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  

  fireEvent.click(screen.getByRole("button"));
  const logoutbutton = screen.getByRole("button",{name : "Logout"});

  expect(logoutbutton).toBeInTheDocument();
});
