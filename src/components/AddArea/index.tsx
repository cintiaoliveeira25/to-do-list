import { KeyboardEvent, ChangeEvent, useState } from "react";
import { Container } from "./styles";

type Props = {
  onEnter: (taskName: string) => void;
  onSubmit: (taskName: string) => void;
};

export function AddArea({ onEnter, onSubmit }: Props) {
  const [inputText, setInputText] = useState<string>("");

  function handleKeyUp(e: KeyboardEvent) {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      saveOnStorage(inputText);
      setInputText("");
    }
  }

  function handleAddItem() {
    onSubmit(inputText);
    saveOnStorage(inputText);
    setInputText("");
  }

  function saveOnStorage(item: string) {
    const storage = localStorage.getItem("SaveItemListLocalStorage");

    if (storage) {
      let oldList = JSON.parse(storage);
      const random = Math.floor(Date.now() * Math.random());
      const newItem = {
        id: random,
        name: item,
        done: false,
      };
      let newList = [...oldList, newItem];

      localStorage.setItem("SaveItemListLocalStorage", JSON.stringify(newList));
    } else if (localStorage.getItem("SaveItemListLocalStorage") === null) {
      const newItem = {
        id: 1,
        name: item,
        done: false,
      };
      localStorage.setItem(
        "SaveItemListLocalStorage",
        JSON.stringify([newItem])
      );
    }
  }

  function SaveItem(e: ChangeEvent<HTMLInputElement>) {
    setInputText(e.currentTarget.value);
  }

  return (
    <Container>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={SaveItem}
        onKeyUp={handleKeyUp}
      />
      <button onClick={() => handleAddItem()}>Salvar</button>
    </Container>
  );
}
