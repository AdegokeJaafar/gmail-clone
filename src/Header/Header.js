import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon  from '@material-ui/icons/ArrowDropDown';



function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://www.theindianwire.com/wp-content/uploads/2020/12/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt=""/>
            </div>

            <div className="header-middle">
                <SearchIcon/>
                <input placeholder="Search mail" type="text"/>
                <ArrowDropDownIcon className=""header-input/>
            </div>
            <div className="header-right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
