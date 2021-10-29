import { KeyboardEvent, ChangeEvent, useState } from "react";
import { Container } from "./styles";

type Props = {
  onEnter: (taskName: string) => void;
};

export function AddArea({ onEnter }: Props) {
  const [inputText, setInputText] = useState<string>("");

  function handleKeyUp(e: KeyboardEvent) {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      saveOnStorage(inputText);
      setInputText("");
    }
  }

  function saveOnStorage(item: string) {
    const storage = localStorage.getItem("SaveItemListLocalStorage");

    if (storage) {
      let oldList = JSON.parse(storage);
      const newItem = {
        id: oldList.length + 1,
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
    </Container>
  );
}

