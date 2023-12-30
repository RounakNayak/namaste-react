//nested div
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello from h1 tag"),
    React.createElement("h2", {}, "Hello from h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello from h1 tag"),
    React.createElement("h2", {}, "Hello from h2 tag"),
  ]),
]);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX - Html-like or Xml-like syntax(transpiled before it reaches the JS) - PARCEL - Babel
const jsxHeading = <h1 className="header">Namaste react using jsx</h1>;

//React Functional Component
const Title = () => <h1 className="head">Namaste React using JSX</h1>;

//component compostition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    {Title()}
    <Title></Title>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);
root.render(<HeadingComponent />);
