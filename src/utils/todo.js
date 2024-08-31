import { useTodoContext } from './TodoContext';

export const Todo = ({ id, title, completed, isEditing }) => {
    const { onTodoSave, onTodoRemove, onTodoTitleChange, onTodoCompletedChange } = useTodoContext();

    return (
        <div>
            {isEditing ? (
                <input
                    type="text"
                    defaultValue={title}
                    onBlur={(e) => onTodoSave(id, e.target.value)}
                />
            ) : (
                <span>{title}</span>
            )}
            <input
                type="checkbox"
                checked={completed}
                onChange={(e) => onTodoCompletedChange(id, e.target.checked)}
            />
            <button onClick={() => onTodoRemove(id)}>Удалить</button>
        </div>
    );
};