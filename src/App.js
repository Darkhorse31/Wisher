import "./styles.css";
import Form from "./Component/Form";
export default function App() {
  return (
    <div className="App">
      <svg width="350" height="150">
        <text
          x="15"
          y="50"
          stroke="#7924ab"
          fill="transparent"
          stroke-width="2"
        >
          Good Morning
        </text>
      </svg>
      <Form />
    </div>
  );
}
