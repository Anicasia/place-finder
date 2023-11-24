import React from "react";
import renderer from 'react-test-renderer';
import { render, screen,act,fireEvent } from "@testing-library/react";
import Results from "./Results";
describe("Results Test", () => {

  it("renders correctly", () => {
    const result = renderer.create(<Results results={{}} />).root;
    expect(result).toMatchSnapshot();
  });

  test("onclick it changes state to true", () => {
    const setState = jest.fn();
    jest.spyOn(React, 'useState').mockImplementationOnce(initState => [initState,setState]);//() => [true, jest.fn()]);
    render(<Results results={{}} />);
    const input = screen.getByTestId('switch');
    fireEvent.click(input);
    expect(input).toBeChecked();
    expect(setState).toHaveBeenCalledWith(true);
  });
});
