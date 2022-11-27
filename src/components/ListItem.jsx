import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheckCircle, faArrowRotateBack } from '@fortawesome/free-solid-svg-icons';

import { 
  changeStatus,
  remove,
  FINISHED,
  NOT_FINISHED,
  get as getTodos
} from '../storage/Todos.js';

export default function ListItem(props) {
  const item = props.item ?? {
    id: 0,
    title: ''
  };

  const removeHandler = function() {
    remove(item.id);
    
    props.onModify(getTodos(props.type));
  }
  let changeHandler;

  if (props.type === NOT_FINISHED) {
    changeHandler = function() {
      changeStatus(item.id, FINISHED);

      props.onModify(getTodos(props.type));
    };
  } else {
    changeHandler = function() {
      changeStatus(item.id, NOT_FINISHED);

      props.onModify(getTodos(props.type));
    };
  }

  return (
    <li className="flex items-center p-4 shadow rounded my-2 md:w-1/3 md:mx-3" key={item.id}>
      <span className="flex items-center grow text-sm">{item.title}</span>
      <button className="w-8 h-8 mr-2 text-md" onClick={removeHandler}>
        <FontAwesomeIcon icon={faTrash} className="text-red-700" />
      </button>
      <button className="w-8 h-8 text-md" onClick={changeHandler}>
        <FontAwesomeIcon icon={
          (props.type === NOT_FINISHED) ? faCheckCircle :
          (props.type === FINISHED) ? faArrowRotateBack :
          faCheckCircle
        } className="text-green-700" />
      </button>
    </li>
  );
}
