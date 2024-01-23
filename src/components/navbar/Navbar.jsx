import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';


const Navbar = () => {
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="search">

                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon />
                    
                </div>

                <div className="items">
                <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        english
                    </div>

                    <div className="item">
                    <DarkModeOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                      <FullscreenExitOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <div className="counter"> 51</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon" />
                        <div className="counter"> 11</div>
                    </div>
                    <div className="item">
                    <ListOutlinedIcon className="icon"/>
                    </div>
                    
                    <div className="item">
                        <img src="https://media.licdn.com/dms/image/D4D03AQEgjHH3TsvWhQ/profile-displayphoto-shrink_800_800/0/1699725247520?e=1711584000&v=beta&t=0s4C9f4cfmYtPfmOOXpadFUm-me_rVFzt-iGMtr1olM"
                            alt=""
                            className="avatar" />
                    </div>
                </div>  
        </div>
            
        </div>
    )
}

export default Navbar