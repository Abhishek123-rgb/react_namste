const heading = React.createElement("div", {id: "paarent"}, [React.createElement("div", {id: "child1"}, React.createElement("h1", {id: "grand1"}, "Hello World From React!")),React.createElement("div", {id: "child2"}, React.createElement("h1", {id: "grand2"}, "Hello World From child 2!"))]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);