const STORAGE_KEY = 'ihy-todoapp';
let todos = [];

export const FINISHED = 'finished';
export const NOT_FINISHED = 'not-finished';

export function isStorageAvailable() {
  return typeof(Storage) !== 'undefined';
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export function get(type=NOT_FINISHED) {
  todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];

  return todos.filter(todo => todo.status === type);
}

export function add(todo) {
  if (!todo.id) {
    todo.id = generateID();
  }
  
  todos.push(todo);

  save();
}

export function changeStatus(id, status) {
  const target = todos.find(todo => todo.id === id);
  target.status = status;

  save();
}

export function remove(id) {
  const targetIndex = findIndex(id);
  todos.splice(targetIndex, 1);

  save();
}

function findIndex(id) {
  for (let i = 0; i < todos.length; i++) {
    if(todos[i].id === id) {
      return i;
    }
  }
}

function generateID() {
  return +new Date();
}
