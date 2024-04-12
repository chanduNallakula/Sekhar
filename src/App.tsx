import Task1 from "./Task1";
import Task2 from "./Task2";
import Task3 from "./Task3";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Task3 />
      <Routes>
        <Route path="/aaa" element={<Task1 />} />
      </Routes>
      <Routes>
        <Route path="/bbb" element={<Task2 />} />
      </Routes>
    </>
  );
}

export default App;
