import { useDispatch } from 'react-redux';
import {toggleComplete, removeTodo} from '../store/todoSlice';
import "./TodoItem.css"
const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}

      />
      <span className='span1'>{text}</span>
      <span className='span2' onClick={() => dispatch(removeTodo({id}))}>&times;</span>
    </li>
  );
};

export default TodoItem;
