import { Button } from "@material-ui/core";
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
import SidebarOption from './SidebarOption';


function Sidebar() {
    return (
        <div className="sidebar">
             <Button
             startIcon={<AddIcon fontSize="large"
             />}
             className="sidebar-compose"
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
        </div>
    );
}

export default Sidebar
