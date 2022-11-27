import { useState, useEffect } from 'react';

import ListView from '../components/ListView.jsx';
import * as Todos from '../storage/Todos.js';

export default function Finished() {
  const [todos, setTodos] = useState(Todos.get(Todos.FINISHED));

  useEffect(() => {
    document.title = "Finished Todos";
  });

  return <ListView items={todos} type={Todos.FINISHED} onModify={setTodos} />;
}
