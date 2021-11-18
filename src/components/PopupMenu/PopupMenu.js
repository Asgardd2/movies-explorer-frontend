import React from 'react'
import { Link } from "react-router-dom";
import accountLogo from "../../images/account-icon.svg";
import Navigation from "../Navigation/Navigation";
import NavTab from "../NavTab/NavTab";
import AccountNav from "../AccountNav/AccountNav";
import './PopupMenu.css'

function popupMenu(props) {


    return (
            <div className={`popupMenu ${props.isOpen && "popupMenu_opened"}`} id={props.name}>
             
                <button
                  aria-label="Close"
                  type="button"
                  className="popupMenu__close-button" 
                  onClick={props.onClose}
                ></button>
                <div className="popupMenu__main">
                <Navigation
                    onClose={props.onClose}/>
                <AccountNav
                type="burger"
                onClosePopup = {props.onClose}
                />
                </div>

            </div>
        

    ); 
  }

export default popupMenu;

  
//onClick={props.onClose}
/*

*/