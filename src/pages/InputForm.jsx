import { useEffect } from 'react';
import { Form, redirect } from 'react-router-dom';

import {
  add as addTodo,
  FINISHED,
  NOT_FINISHED
} from '../storage/Todos.js';

export async function action({ request, params }) {
  const formData = await request.formData();
  const newTodo = {
    title: formData.get('title'),
    status: formData.get('status')
  }

  addTodo(newTodo);

  return redirect('not-finished');
}

export default function InputForm() {
  useEffect(() => {
    document.title = "Add New Todo";
  });

  return (
    <Form method="post">
      <div className="mb-6">
        <label for="title" className="block mb-2">Title</label>
        <input type="text" id="title" name="title" placeholder="What todo?" className="block p-2 border rounded w-full focus:outline-blue-500 text-sm" />
      </div>
      <div className="mb-8">
        <label for="status" className="block mb-2">Status</label>
        <select id="status" name="status" className="bg-white block p-2 border rounded w-full focus:outline-blue-500 text-sm">
          <option value={NOT_FINISHED}>Not Finished</option>
          <option value={FINISHED}>Finished</option>
        </select>
      </div>
      <div>
        <button className="px-5 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-blue-100">
          Save
        </button>
      </div>
    </Form>
  );
}
