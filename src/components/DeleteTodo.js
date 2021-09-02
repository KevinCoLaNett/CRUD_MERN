import { useRouteMatch, useHistory } from "react-router-dom";
import { deleteTodo } from "../api";

export const DeleteTodo = () => {
  const match = useRouteMatch();
  const history = useHistory()
  deleteTodo(match.params.id);
  history.push("/");
  
  return <div>Loading...</div> 
};