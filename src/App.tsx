import "./styles.css";
import IMAGE from "./react-typescript.png";

export const App = () => {
  const name = "a";
  return (
    <div>
      <h1>React TypeScript - developer {process.env.name}</h1>
      <img src={IMAGE} alt="React TypeScript" width="400" height="200" />
    </div>
  );
};
