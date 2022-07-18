import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import Note from "./Note";


test("testing the elements and component to render and function appropriately", () => {
    render(<App />);

    const titleElement = screen.getByPlaceholderText("Title");
    expect(titleElement).toBeInTheDocument();
    const contentElement = screen.getByPlaceholderText("Take a note...");
    expect(contentElement).toBeInTheDocument(); 

    const buttonElement = screen.getByRole("button", {name: "Add"})
    expect(buttonElement).toBeInTheDocument();
    // logRoles(screen.getByTestId("myAppDiv"))
    const heading = screen.getByRole("heading", {name: "Keeper"});
    expect(heading).toBeInTheDocument();
    const foot = screen.getByRole("contentinfo", {name: ""});
    expect(foot).toBeInTheDocument();

});

test("Notes get listed on the screen when Add button is pressed", ()=> {
    render(<Note  allottments={
        [
            { id:1, title:"this is note 1", content: "today is beautiful"},
            { id:2, title:"this is note 2", content: "today is more beautiful"},
        ]
    } />);
    
    expect(screen.getByePlaceholderText("heading", {name:"something"}));
    expect(screen.getByePlaceholderText("paragraph", {name:"something"}));

    
    userEvent.type(titleElement, "title for the note");
    
    const note = screen.queryByDisplayValue("title for the note",{exact:false})
    expect(note).toBeInTheDocument();
});

