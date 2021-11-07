import { useState } from "react";
import {
  Container,
  Header,
  Titulo,
  Image,
  AreaList,
  NemItem,
} from "./App.styles";
import { Item } from "./types/item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";
import { useEffect } from "react";
import toDoList from "./assets/images/todo.svg";

function App() {
  const [list, setList] = useState<Item[]>([]);
  const [openModal, setOpenModal] = useState<Boolean>(false);
  const [todoId, setTodoId] = useState(0);
  const [todoText, setTodoText] = useState("");

  function setLocalStorage(data: Item[]) {
    localStorage.setItem("SaveItemListLocalStorage", JSON.stringify(data));
  }

  function handleAddTask(taskName: string) {
    const random = Math.floor(Date.now() * Math.random());
    let newList = [...list];
    newList.push({
      id: random,
      name: taskName,
      done: false,
    });
    setList(newList);
  }

  function handleTaskChange(id: number, done: boolean) {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
    setLocalStorage(newList);
  }

  function handleDeleteTask(id: number) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    setLocalStorage(newList);
  }

  function handleEditTask(item: Item) {
    setOpenModal(true);
    setTodoId(item.id)
    setTodoText(item.name);
  }

  function handleSaveEditTask(){
    const todoListEdited = list.map((task: Item) => {
      if (task.id === todoId){
        return {...task, name: todoText}
      }
      return task
    })
    setList(todoListEdited)
    setLocalStorage(todoListEdited);
    handleCloseModal();
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  useEffect(() => {
    let storageList = JSON.parse(
      localStorage.getItem("SaveItemListLocalStorage") || "{}"
    );
    storageList.length > 0 && setList(storageList);
  }, []);

  return (
    <Container>
      <Header>
        <NemItem>
          <Titulo>Lista de Tarefas</Titulo>
          <AddArea onEnter={handleAddTask} />
        </NemItem>

        <Image>
          <img src={toDoList} alt="to do list" />
        </Image>
      </Header>

      <AreaList>
        {openModal && (
          <div
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              color: "#000",
              zIndex: 99,
              top: "36%",
              width: "78%",
              height: "100px",
            }}
          >
            <input
              type="text"
              onChange={(e) => setTodoText(e.target.value)}
              value={todoText}
            />
            <button onClick={handleSaveEditTask}>salvar</button>
            <button onClick={handleCloseModal}>x</button>
          </div>
        )}

        {!openModal &&
          list.map((item, index) => (
            <ListItem
              key={index}
              item={item}
              onChange={handleTaskChange}
              onDelete={handleDeleteTask}
              onEdit={() => handleEditTask(item)}
            />
          ))}
      </AreaList>
    </Container>
  );
}

export default App;
