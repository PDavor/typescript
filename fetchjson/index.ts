import axios from "axios";
// tsc index.ts to compile to javascript
// node index.js to run it with node
// or
// ts-node index.ts -- all in one line
const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with id : ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};
