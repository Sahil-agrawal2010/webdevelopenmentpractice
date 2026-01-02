import "./First_project.css";
import { Main_heading } from "./First_project/Heading";
import { Main_add } from "./First_project/Add_work";
import { Todo_item1 } from "./First_project/First_task";
import { Todo_item2 } from "./First_project/Second_task";

export default function App() {
  return (
    <div>
      <Main_heading></Main_heading>
      <Main_add></Main_add>
      <Todo_item1></Todo_item1>
      <Todo_item2></Todo_item2>
    </div>
  );
}
