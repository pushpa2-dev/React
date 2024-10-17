import React from "react";
import ReactDOM from "react-dom";

const Title = () => <h1 className="head">React using JSX</h1>;

//react functional component

const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title/>
    <Title></Title>
    <h1>Pushpa latha react functional components</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
