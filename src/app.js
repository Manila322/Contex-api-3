import { ControlPanel, Todo, Search } from "./components";
import { useTodoContext } from "./TodoContext";
import styles from "./app.module.css";

export const App = () => {
  const { todos, onTodoAdd, setIsAlphabetSorting } = useTodoContext();

  return (
    <div className={styles.app}>
      <ControlPanel onTodoAdd={onTodoAdd} onSorting={setIsAlphabetSorting} />
      <Search /> {/* Вставляем наш новый компонент Search */}
      <div>
        {todos.map(({ id, title, completed, isEditing = false }) => (
          <Todo
            key={id}
            id={id}
            title={title}
            completed={completed}
            isEditing={isEditing}
          />
        ))}
      </div>
    </div>
  );
};
