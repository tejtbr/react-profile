import React,{useState} from "react";
import Styles from "./navbar.module.css"
import {getImageUrl} from "../utils";


export const Navbar= ()=>{
    //states
    const [menuopen ,setmenuopen]=useState(false);


    return <nav className={Styles.navbar}> 
        <a href="/" className={Styles.title}>Portfolio</a>

        <div className={Styles.menu}>
        <img className={Styles.btn} 
        src={menuopen? getImageUrl("nav/closeIcon.png"):getImageUrl("nav/menuIcon.png")}
        onClick={()=>setmenuopen(!menuopen)}
            />
            <ul className={`${Styles.menuitems} ${menuopen && Styles.menuopen}`}
            onClick={()=>{!setmenuopen(false)}}>
                <li><a href="#about">about</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    </nav>
}
