import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import FileNameForm from "./InputText";
import inputText from "input.txt";

describe("Testing file name form for text file input module.", () => {
  it("should starte with empty string for state.fileName", () => {
    const component = renderer.create(<FileNameForm />);
    expect(component.state.fileName).toEqual("");
  });
  // it("should set state.fileName to a string containing the content in public/input.txt", () => {
  //   const expectedContent = fetch(inputText).then(response => response.text());
  // });
});
