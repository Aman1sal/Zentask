import css from './Sidebar.module.css';
import {MdSpaceDashboard} from 'react-icons/md';
import {AiFillCalendar} from 'react-icons/ai';
import {AiOutlineTable} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={css.container}>
        <img src="./logo.png" alt="Logo" className={css.logo} />
        <div className={css.menu}>
            <NavLink to="dashboard" className={css.item} title="Dashboard">
                <MdSpaceDashboard size={30}/>
            </NavLink>

            <NavLink to="calendar" className={css.item} title="Calendar">
                <AiFillCalendar size={30}/>
            </NavLink>

            <NavLink to="users" className={css.item} title="users">
                <AiOutlineTable size={30}/>
            </NavLink>

        </div>
    </div>
  )
}

export default Sidebar