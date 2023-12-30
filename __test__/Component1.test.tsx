import Component1 from "../src/Component1";
import { render, screen } from "@testing-library/react-native";

describe("Component1", () => {
  it("This is Component!というテキストが見える", async () => {
    render(<Component1 />);
    expect(screen.getByText("This is Component!")).toBeDefined();
  });

  it("インプットボックス見える", async () => {
    render(<Component1 />);
    expect(screen.getByTestId("sampleTextBox")).toBeDefined();
  });

  it("ボタンというテキストのあるボタンが見える", async () => {
    render(<Component1 />);
    expect(screen.getByText("ボタン")).toBeDefined();
  });
});
