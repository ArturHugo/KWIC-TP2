import React from "react";
import { shallow } from 'enzyme';
import App from "../../../src/components/App/App";

describe('Main Section where renders the App Component', () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    shallow(<App />)
  });
})

