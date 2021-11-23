import { useState, useEffect } from "react";
import { Item } from "./types/item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";
import {
  Container,
  Header,
  Titulo,
  Image,
  AreaList,
  NewItem,
  OpenModal,
  ModalIcon,
  ModalDelete,
  ModalEdit
} from "./App.styles";
import toDoList from "./assets/images/todo.svg";
import close from "./assets/images/close.png";
import save from "./assets/images/save.png";
import { Modal } from "./types/enum";

function App() {
  const [list, setList] = useState<Item[]>([]);
  const [openModal, setOpenModal] = useState<Boolean>(false);
  const [typeModal, setTypeModal] = useState<Modal>();
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

  function handleDeleteTask(item: Item) {
    setTypeModal(Modal.delete);
    setTodoId(item.id);
    setOpenModal(true);
  }

  function handleSaveDeleteTask() {
    
    const newList = list.filter((item) => item.id !== todoId);
    setList(newList);
    setLocalStorage(newList);
    handleCloseModal();
  }

  function handleEditTask(item: Item) {
    setTypeModal(Modal.edit);
    setOpenModal(true);
    setTodoId(item.id);
    setTodoText(item.name);
  }

  function handleSaveEditTask() {
    const todoListEdited = list.map((task: Item) => {
      if (task.id === todoId) {
        return { ...task, name: todoText };
      }
      return task;
    });
    setList(todoListEdited);
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
        <NewItem>
          <Titulo>Lista de Tarefas</Titulo>
          <AddArea onEnter={handleAddTask} />
        </NewItem>

        <Image>
          <img src={toDoList} alt="to do list" />
        </Image>
      </Header>

      <AreaList>
        {openModal && (
          <OpenModal>
            {typeModal === Modal.delete ? (
              <ModalDelete>
                <p>Deseja realmente excluir o item da lista?</p>
                <ModalIcon>
                  <img
                    src={save}
                    title="Salvar"
                    alt="botao de salvar"
                    onClick={handleSaveDeleteTask}
                  />
                  <img
                    src={close}
                    title="Fechar modal"
                    alt="botao de fechar"
                    onClick={handleCloseModal}
                  />
                </ModalIcon>
              </ModalDelete>
            ) : (
              <ModalEdit>
                <input
                  type="text"
                  onChange={(e) => setTodoText(e.target.value)}
                  value={todoText}
                />
                <ModalIcon>
                  <img
                    src={save}
                    title="Salvar"
                    alt="botao de salvar"
                    onClick={handleSaveEditTask}
                  />
                  <img
                    src={close}
                    title="Fechar modal"
                    alt="botao de fechar"
                    onClick={handleCloseModal}
                  />
                </ModalIcon>
              </ModalEdit>
            )}
          </OpenModal>
        )}

        {!openModal &&
          list.map((item, index) => (
            <ListItem
              key={index}
              item={item}
              onChange={handleTaskChange}
              onDelete={() => handleDeleteTask(item)}
              onEdit={() => handleEditTask(item)}
            />
          ))}
      </AreaList>
    </Container>
  );
}

export default App;
