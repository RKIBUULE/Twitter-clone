import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
// import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListIcon from '@mui/icons-material/List';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';

function Sidebar() {
  return (
    <div className='sidebar '>
        {/* Twitter icon */}
        <TwitterIcon  className='sidebar--twitterIcon'/>
        
        <SidebarOption active Icon={HomeIcon} text="Home"/>
        <SidebarOption Icon={TagIcon} text="Explore"/>
        <SidebarOption Icon={NotificationsIcon} text="Notifications"/>
        <SidebarOption Icon={MailOutlineIcon} text="Notifications"/>
        <SidebarOption Icon={BookmarkIcon} text="Bookmarks"/>
        <SidebarOption Icon={ListIcon} text="Lists"/>
        <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
        <SidebarOption Icon={MoreHorizIcon} text="More"/>
     
        {/* Sidebar Option */}
        <Button variant='outlined' className='sidebar__tweet' fullWidth>
          Tweet
        </Button>
      
    </div>
  )
}

export default Sidebar
