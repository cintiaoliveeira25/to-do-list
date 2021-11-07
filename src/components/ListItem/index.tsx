import { Checkbox, Container, Icons } from "./styles";
import { Item } from "../../types/item";
import deleta from "../../assets/images/delete.svg";
import editar from "../../assets/images/editar-texto.png";

type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
};

export function ListItem({ item, onChange, onDelete, onEdit }: Props) {
  
  function buttonDelete() {
    onDelete(item.id);
  }

  function buttonEdit() {
    onEdit(item.id);
  }

  return (
    <Container done={item.done}>
      <Checkbox>
        <label className="container">
          <input
            type="checkbox"
            checked={item.done}
            onChange={(e) => onChange(item.id, e.target.checked)}
          />
          <span className="checkmark"></span>
          <label>{item.name}</label>
        </label>
      </Checkbox>

      <Icons>
        <img
          src={editar}
          alt="icone de editar"
          title="Editar item"
          onClick={buttonEdit}
        />
        <img
          src={deleta}
          alt="icone de deletar"
          title="Deletar item"
          onClick={buttonDelete}
        />
      </Icons>
    </Container>
  );
}
