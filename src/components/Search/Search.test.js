import renderer from "react-test-renderer";
import Search from "./Search";

describe("Search Results", () => {
  it("renders correctly", () => {
    const search = renderer.create(<Search />).root;
    expect(search).toMatchSnapshot();
  });
});
