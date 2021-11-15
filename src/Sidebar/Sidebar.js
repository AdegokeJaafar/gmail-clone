import { Button, IconButton } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox"
import StarIcon from "@material-ui/icons/Star"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import LabelImportantIcon from "@material-ui/icons/LabelImportant"
import NearMeIcon from "@material-ui/icons/NearMe"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import NoteIcon from "@material-ui/icons/Note"
import PhoneIcon from "@material-ui/icons/Phone"
import PersonIcon from "@material-ui/icons/Person"
import DuoIcon from "@material-ui/icons/Duo"
import SidebarOption from './SidebarOption';
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mailSlice"

function Sidebar() {
    const dispatch = useDispatch();

    return (
        <div className="sidebar">
             <Button
             startIcon={<AddIcon fontSize="large"
             />}
             className="sidebar-compose"
             onClick={() => dispatch(openSendMessage())}
             >
             Compose
             </Button>

             <SidebarOption Icon={InboxIcon} title="Inbox" number={104} 
             selected={true}/>
             <SidebarOption Icon={StarIcon} title="Star" number={99} />
             <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={10} />
             <SidebarOption Icon={LabelImportantIcon} title="Important" number={55} />
             <SidebarOption Icon={NearMeIcon} title="Sent" number={66} />
             <SidebarOption Icon={NoteIcon} title="Drafts" number={199} />
             <SidebarOption Icon={ExpandMoreIcon} title="More" number={77} />
        
            <div className="sidebar-footer">
                <div className="sidebar-footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Sidebar
