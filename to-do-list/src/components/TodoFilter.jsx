import {useState} from 'react'

function TodoFilter(getCompletedTodos, todos) {
    const [displayedTodos, setDisplayedTodos] = useState(todos);

    const handleShowAllClick = () => {
    setDisplayedTodos(todos);
    };

    const handleShowCompletedClick = () => {
        const completedTodos = getCompletedTodos();
        setDisplayedTodos(completedTodos);
      };  


  return (
    <div>
        <button onClick={handleShowAllClick}>Tümü</button>
      <button onClick={handleShowCompletedClick}>Tamamlananlar</button>

    </div>
  )
}

export default TodoFilter
