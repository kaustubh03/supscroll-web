import React, { useEffect } from 'react';
import { supscroll } from "supscroll";
import 'supscroll/carousel.css';
import '../../App.css'

const Menu = () =>{
    useEffect(()=>{

            let elem = document.querySelector('.supscroll .supscroll-wrapper');
            try{
                supscroll(elem);
            }
            catch(err){
                console.log(err)
            }
    },[]);
return <div className="supscroll">
    <div className="supscroll-wrapper">
        <a href="#menu1">
            <span className="menu-child">
                Menu Item 1
            </span>
            </a>
            <a href="#menu1">
            <span className="menu-child">
            Menu Item 2
            </span>
            </a>
            <a href="#menu1">
            <span className="menu-child">
            Menu Item 3
            </span>
            </a>
            <a href="#menu1">
            <span className="menu-child">
            Menu Item 4
            </span>
            </a>
            <a href="#menu1">
            <span className="menu-child">
            Menu Item 5
            </span>
            </a>
            <a href="#menu1">
            <span className="menu-child">
            Menu Item 1
            </span>
            </a>
            <a href="#menu1">
            <span className="menu-child">
            Menu Item 6
            </span>
            </a>
            <a href="#menu1">
            <span className="menu-child">
            Menu Item 5
            </span>
            </a>
            <a href="#menu1">
            <span className="menu-child">
            Menu Item 6
            </span>
            </a>
            <a href="#menu1">
            <span className="menu-child">
            Menu Item 7
            </span>
            </a>
            <a href="#menu1">
            <span className="menu-child">
            Menu Item 8
            </span>
            </a>
            <a href="#menu1">
            <span className="menu-child">
            Menu Item 9
            </span>
            </a>
            <a href="#menu1">
            <span className="menu-child">
            Menu Item 10
            </span>
            </a>
    </div>
</div>
}

export default Menu;