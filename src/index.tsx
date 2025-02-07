import { createRoot } from "react-dom/client";
//component file
import TodoContainer from "./components/TodoContainer";
import "./App.css";

const root = createRoot(document.getElementById("root")!);
root.render(<TodoContainer />);