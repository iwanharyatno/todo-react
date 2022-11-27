import { useState, useEffect } from 'react';

import ListView from '../components/ListView.jsx';
import * as Todos from '../storage/Todos.js';

export default function NotFinished() {
  const [todos, setTodos] = useState(Todos.get(Todos.FINISHED));

  useEffect(() => {
    document.title = "Not Finished Todos";
  });

  return <ListView items={Todos.get(Todos.NOT_FINISHED)} type={Todos.NOT_FINISHED} onModify={setTodos} />;
}
