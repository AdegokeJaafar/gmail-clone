import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import SettingsIcon from '@material-ui/icons/Settings'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import React from 'react'
import "./EmailList.css"
import Section from '../Section/Section'

function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList-settings">
                <div className="emailList-settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            <div className="emailList-settingsRight">
                <IconButton>
                    <ChevronLeftIcon/>
                </IconButton>
                <IconButton>
                    <ChevronRightIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>
            </div>
            </div>
            <div className="emailList-sections">
              <Section Icon={InboxIcon} title="Primary" color="red" selected/>  
              <Section Icon={PeopleIcon} title="Social" color="#1A73E8" selected/>  
              <Section Icon={LocalOfferIcon} title="Promotions" color="green" selected/>  
            </div>
        </div>
    )
}

export default EmailList