import App from "./App"
import { render,screen } from "@testing-library/react-native";

it("test", async () => {
    render(<App />);
    const textElement = screen.getByText("Open up App.tsx to start working on your app!");
    expect(textElement).toBeTruthy();
});

