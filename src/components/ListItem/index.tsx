import { Container } from './styles';
import { Item } from '../../types/item';
import deleta from '../../assets/images/delete.svg';

type Props = {
  item: Item,
  onChange: (id: number, done: boolean) => void,
  onDelete: (id: number) => void
}

function ListItem({ item, onChange, onDelete }: Props) {

  function buttonDelete() {
    onDelete(item.id);
  }

  return (
    <Container done={item.done}>
      <input 
        type="checkbox" 
        checked={item.done}
        onChange={e => onChange(item.id, e.target.checked)}
      />
      <label>{item.name}</label>
      <img src={deleta} alt="" onClick={buttonDelete} />
    </Container>
  )
}

export default ListItem;