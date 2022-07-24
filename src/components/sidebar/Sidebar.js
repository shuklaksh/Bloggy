import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';
import './Sidebar.css';
import SidebarComponent from './SidebarComponent';

function Sidebar() {
    const user = useSelector(selectUser);
    return(
      <SidebarComponent user = {user} />
    )

  
}

export default Sidebar
