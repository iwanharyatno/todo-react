import { NavLink } from 'react-router-dom';

export default function TabView(props) {
  const baseClasses = "py-3 px-5 hover:text-blue-500 ";
  const active = "border-b-2 border-blue-500 text-blue-500";

  return (
    <div className="flex justify-start">
      {
        props.tabs.map(tab => (
          <NavLink to={tab.link} className={({ isActive, isPending }) => 
            isActive ? (baseClasses + active) :
            isPending ? (baseClasses + 'text-blue-500') :
            baseClasses}>
            <span>{tab.name}</span>
          </NavLink>
        ))
      }
    </div>
  );
}
