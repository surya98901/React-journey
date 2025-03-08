
// // creating a Basic React element and rendering it
// const heading = React.createElement(
//     "h1", { class: "Red"}, "Hello World !"
// );
// const root = ReactDOM.createRoot(document.getElementById("main"));
// root.render(heading);

// creating nested elements
const heading = React.createElement("h1", { class: "Red"}, "Hello World !");
const divChild = React.createElement("div", { class: "child-dev" },heading);
const div = React.createElement("div", { class: "Parent-div" },divChild);

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(div);