import Component1 from "../src/Component1";
import { render, screen } from "@testing-library/react-native";

it("test", async () => {
  render(<Component1 />);
  expect(screen.getByText("This is Component!")).toBeTruthy();
});
