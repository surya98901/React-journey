import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import ResContainer from "../ResContainer";
import { BrowserRouter } from "react-router-dom";
import ResListMockData from "../mocks/ResListMockData.json";
import {act} from 'react';


global.fetch =jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(ResListMockData);
        },
    })
})
it("ResContainer should render correctly", async() => {
    await act(async () => {
        render(<BrowserRouter><ResContainer /></BrowserRouter>);
    });
    const filterbar = screen.getByTestId("filter bar");
    const rescards = screen.getAllByTestId("ResCard");
    expect(filterbar).toBeInTheDocument();
    expect(rescards.length).toBe(28);

});
it("should search for restaurents", async() => {
    await act(async () => {
        render(<BrowserRouter><ResContainer /></BrowserRouter>);
    });
    const Searchbar = screen.getByTestId("search bar");
    fireEvent.change(Searchbar, { target: { value: "pizza" } });
    fireEvent.click(screen.getByTestId("search-btn"));
    const rescardsAfterClick = screen.getAllByTestId("ResCard");
    expect(rescardsAfterClick.length).toBe(9);

});
it("should filter the top rated restaurents", async() => {
    await act(async () => {
        render(<BrowserRouter><ResContainer /></BrowserRouter>);
    });
    const filterbtn = screen.getByTestId("top-rated-filter-btn");
    fireEvent.click(filterbtn);
    const rescardsAfterClick = screen.getAllByTestId("ResCard");
    expect(rescardsAfterClick.length).toBe(16);

});