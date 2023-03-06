import "./NewTodoFrom.css"
const NewTodoForm = ({ value, updateText, handleAction }) => {
  return (
    <label>
      <input
        placeholer='new todo'
        value={value}
        onChange={(e) => updateText(e.target.value)}
      className="InputTodo"
     />
      <button className="btn" onClick={handleAction}>Add todo</button>
    </label>
  );
};

export default NewTodoForm;
