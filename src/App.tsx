import { useState } from 'react';
import { Container, Area, Header } from './App.styles';
import { Item } from './types/item';
import ListItem from './components/ListItem';
import AddArea from './components/AddArea';

function App() {
  const [list, setList] = useState<Item[]>([])

  function handleAddTask(taskName: string) {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  function handleTaskChange(id: number, done: boolean) {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  function handleDelete(id: number) {
    setList (list.filter(item => item.id !== id));
  }

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>  

        <AddArea onEnter={handleAddTask} />
        
        { list.map((item, index) => (<ListItem key={index} item={item} onChange={handleTaskChange} onDelete={handleDelete} />))}   
      </Area>
    </Container>
  );
}

export default App;
