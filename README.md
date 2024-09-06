# React 

<!-- <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./index.css"/>
    <title>Namasthe React</title>
</head>

<body>
    <div id="root"> </div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
   
<script src="./App.js"></script>
</body>

</html>

{/* <div id="parent">
    <div id="child">
        <h1>i am h1 tag</h1>
        <h2>i am h1 tag</h2>
    </div>

    <div id="child">
        <h1>i am h1 tag</h1>
        <h2>i am h1 tag</h2>
    </div>
    </div> 
*/}

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


root.render(parent); -->
