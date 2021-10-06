import { KeyboardEvent, useEffect, useState } from "react";
import { Container } from "./styles";

type Props = {
  onEnter: (taskName: string) => void
}

function AddArea({ onEnter }: Props) {
  const [inputText, setInputText] = useState('');

  function handleKeyUp(e: KeyboardEvent) {
    if(e.code === 'Enter' && inputText !== '') {
        onEnter(inputText);
        setInputText('');
    }
  }

  function SaveItem(e: any) {
    localStorage.setItem('SaveItemListLocalStorage', e.target.value);
    

    setInputText(e.target.value)
  }

  useEffect(() => {
    const storage = localStorage.getItem('SaveItemListLocalStorage');
    console.log(storage)
  }, []);

  return (
    <Container>
      <div className="image">➕</div>
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

export default AddArea;
