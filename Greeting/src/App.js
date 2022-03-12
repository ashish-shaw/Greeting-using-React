import "./styles.css";

let currentTime = new Date();
currentTime = currentTime.getHours();
let greeting = "";
let css = {};

if (currentTime >= 1 && currentTime < 12) {
  greeting = "Good Morning";
  css.color = "Green";
} else if (currentTime >= 12 && currentTime < 16) {
  greeting = "Good Afternoon";
  css.color = "Orange";
} else if (currentTime >= 16 && currentTime < 21) {
  greeting = "Good Evening";
  css.color = "Light Red";
} else {
  greeting = "Good Night";
  css.color = "Gray";
}

export default function App() {
  return (
    <div className="App">
      <h1>
        Hello Ashish, <span style={css}>{greeting}</span>
      </h1>
    </div>
  );
}
