import TabView from './TabView.jsx';

export default function Navbar(props) {
  return (
    <header>
      <nav className={'p-4 shadow-md flex justify-between ' + props.className}>
        <h2 className="font-bold text-xl text-blue-500">{ props.title }</h2>
      </nav>
      <TabView tabs={props.tabs} />
    </header>
  );
}
