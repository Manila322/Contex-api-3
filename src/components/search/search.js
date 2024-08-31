import { useTodoContext } from "../../TodoContext";

export const Search = () => {
  const { setSearchPhrase } = useTodoContext();

  const handleSearchChange = (event) => {
    setSearchPhrase(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Поиск задач..."
      onChange={handleSearchChange}
    />
  );
};
