import { useState } from "react";
import { Container, Header, Titulo, Image, AreaList, NemItem } from "./App.styles";
import { Item } from "./types/item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";
import { useEffect } from "react";
import toDoList from "./assets/images/todo.svg";

function App() {
  const [list, setList] = useState<Item[]>([]);

  function handleAddTask(taskName: string) {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
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
    localStorage.setItem("SaveItemListLocalStorage", JSON.stringify(newList));
  }

  function handleDelete(id: number) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    localStorage.setItem("SaveItemListLocalStorage", JSON.stringify(newList));
  }

  function handleEdit(id: number) {
    console.log("editou");
  }

  // function editLocalStorage(id: number, value: any) {
  //   let storageList = JSON.parse(
  //     localStorage.getItem("SaveItemListLocalStorage") || "{}"
  //   );

  //   storageList = storageList.map(function (item: any) {
  //     if (item.id === id) {
  //       item.value = value;
  //     }
  //     return item;
  //   });
  //   localStorage.setItem("list", JSON.stringify(storageList));
  // }

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
        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onChange={handleTaskChange}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </AreaList>
    </Container>
  );
}

export default App;
