/**
 * 
 * 
 * <div id="root">
 *      <div id="child">
 *          <h1>I am an h1 tag/h1>
 *          <h2>I am an h1 tag/h2>
 *       </div>
 *       <div id="child2">
 *          <h1>I am an h1 tag/h1>
 *          <h2>I am an h1 tag/h2>
 *       </div>
 *     
 * </div>
 * 
 * 
 * ReactElement(object) => HTML element(Browser understands)
 * * */

const parent = React.createElement(
  "div", 
  { id: "parent" }, 
  React.createElement(
    "div", 
    { id: "child" }, 
    [
        React.createElement("h1", {}, "I am an h1 tag"), 
        React.createElement("h2", {}, "I am an h2 tag"),
    ]
  ),
  React.createElement(
    "div", 
    { id: "child" }, 
    [
        React.createElement("h1", {}, "I am an h1 tag"), 
        React.createElement("h2", {}, "I am an h2 tag"),
    ]
  )
);

//JSX

console.log(parent); //object
const heading = React.createElement(
  "h1", // type of element
  { id: "heading", xyz: "abc" }, // attributes
  "Hello World from React"// content or children
);
console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
