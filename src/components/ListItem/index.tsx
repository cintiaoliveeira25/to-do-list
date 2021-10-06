import { Container } from './styles';
import { Item } from '../../types/item';

type Props = {
  item: Item,
  onChange: (id: number, done: boolean) => void
}

function ListItem({ item, onChange }: Props) {

  return (
    <Container done={item.done}>
      <input 
        type="checkbox" 
        checked={item.done}
        onChange={e => onChange(item.id, e.target.checked)}
      />
      <label>{item.name}</label>
    </Container>
  )
}

export default ListItem;