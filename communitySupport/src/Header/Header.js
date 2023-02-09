import React from 'react'
import './Header.css'
import { useDispatch} from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from '../HeaderOption/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SuperVisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { logout} from '../features/userSlice';
import { auth } from '../firebase';
import AcUnitIcon from '@material-ui/icons/AcUnit';

function Header() {
    const dispatch = useDispatch();

    const logoutApp = () => {
        
        dispatch(logout())
        auth.signOut();
    }

    return (
        <div className="header" >
            <div className="header_left">
                
            </div>

            <div className="header_right">
                <HeaderOption avatar={true} onClick={logoutApp}
                    title="LogOut" />
            </div>
        </div>
    )
}

export default Header
