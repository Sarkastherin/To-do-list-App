import React from 'react';
import { TodoCounter } from './Components/TodoCounter/TodoCounter';
import { TodoTitle } from './Components/TodoTitle/TodoTitle';
import { TodoSearch } from './Components/TodoSearch/TodoSearch';
import { TodoList } from './Components/TodoList/TodoList';
import { TodoItem } from './Components/TodoItem/TodoItem';
import { TodoButton } from './Components/TodoButton/TodoButton';

/* const defaultTodos = [
  {text: 'Cortar cebolla',completed: false},
  {text: 'Limpiar la casa',completed: true},
  {text: 'Crear el diseño de mi portafolio',completed: false},
  {text: 'Seguir viendo South Park',completed: true},
  {text: 'Limpiar la cocina',completed: true},
] */
/* Se define lo que se guardará en le local storage, defaultTodo */
//localStorage.setItem(itemName,JSON.stringify(defaultTodos))
function useLocalStorage(itemName, initialState){
  /* Se guarda en una constante el valor de localStorage (Como un string) 
  Si itemName no se ha inicializado, retorna un 'null', asignando a localStorageItem el valor de null */
  const localStorageItem = localStorage.getItem(itemName)
  
  let parsedItem
  if(localStorageItem){
    /* Si hay datos en localStorageItem, estos se guardaran pasandolos por el metodo parse, convirtiendolos en un array */
    parsedItem = JSON.parse(localStorageItem)
  }
  else{
    /* Si localStorageItem es null, se agrega un array vacio, pasandolo por el metodo stringify */
    localStorage.setItem(itemName, JSON.stringify(initialState))
    parsedItem = initialState
  }

  const [item, setItem] = React.useState(parsedItem)
  /* Función para actualizar el stado y el localStorage */  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }
  return [item, saveItem]
}
function App() {
  const [todos, saveTodos ] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(item => {return item.completed}).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(
    item => {
      const todoText = item.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase()
      return todoText.includes(searchText)
    });
  
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos);
  };
  
  return (
    <React.Fragment>
      <TodoTitle/>
      <TodoCounter
        completed ={completedTodos}
        total = {totalTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItem 
            text={todo.text} 
            key={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <TodoButton/>
    </React.Fragment>
  );
}

export default App;
