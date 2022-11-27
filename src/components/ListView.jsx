import ListItem from './ListItem.jsx';

export default function ListView(props) {
  const items = props.items;

  return (
    <ul className="flex flex-col md:flex-row">
      {items.map(item => (<ListItem item={item} type={props.type} onModify={props.onModify} />))}
      <em className="d-block text-center font-bold text-gray-400">{items.length ? '' : 'No data Available.'}</em>
    </ul>
  );
}
