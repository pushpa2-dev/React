import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "React h1 tag"),
        React.createElement("h2", {}, "React h2 tag")]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "React h1 child tag"),
        React.createElement("h2", {}, "React h2 child tag")])

);

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);
