import React, {useState} from "react";
import * as Icons from "react-icons/fa"
import {Link} from 'react-router-dom'
import "./Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import PlanSubItems from "../subitems/plan-sub-items/PlanSubItems";
import PdfDownload from "../subitems/downloads/PdfDownload";

function Navbar() {

    const [click, setClick] = useState(false);
    const [planDropdownOpen, setOpen] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [pdfDropDown, setPdfDropDown] = useState(false);
    const handlePdfDropDown = () => setPdfDropDown(!pdfDropDown);


    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setOpen(true);
        } else {
            setOpen(true);
        }
    }
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setOpen(false);
        } else {
            setOpen(false);
        }
    }

    const onMouseEnterPdfDropDown = () => {
        if (window.innerWidth < 960) {
            setPdfDropDown(true);
        } else {
            setPdfDropDown(true);
        }
    }
    const onMouseLeavePdfDropDown = () => {
        if (window.innerWidth < 960) {
            setPdfDropDown(false);
        } else {
            setPdfDropDown(false);
        }
    }

    return (
        <>
            <nav className="navbar">
                <Link to="/Home" className="navbar-logo">
                    Insurance
                    <Icons.FaClinicMedical/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    { !click ? <FontAwesomeIcon icon={faBars} size="2x" color="black"/> : <FontAwesomeIcon icon={faXmark} size="2x" color="#fff"/>}
                </div>
                <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to={'/'} className="nav-links" onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                        <Link to={'/'} className="nav-links" onClick={closeMobileMenu}>
                            Plans
                        </Link>
                        {planDropdownOpen && <PlanSubItems/>}
                    </li>
                    <li className="nav-item"
                    onMouseEnter={onMouseEnterPdfDropDown}
                    onMouseLeave={onMouseLeavePdfDropDown}>
                        <Link to={'/'} className="nav-links" onClick={closeMobileMenu}>
                            Downloads
                        </Link>
                        {pdfDropDown && <PdfDownload/>}
                    </li>
                    <li className="nav-item">
                        <Link to={'/'} className="nav-links" onClick={closeMobileMenu}>
                            Hospital List
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/'} className="nav-links" onClick={closeMobileMenu}>
                            Key feature
                        </Link>
                    </li>
                    {/*<li>
                        <Link
                            to='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Sign Up
                        </Link>
                    </li>*/}
                    {/*{navItems.map((item, index) => {
                        if (item.title === "Plans") {
                            return (
                                <li key={index.id} className={item.cName}>
                                    <Link to={index.path}>{item.title}</Link>
                                    <PlanSubItems/>
                                </li>
                            );
                        }
                        return (
                            <li key={index.id} className={item.cName}>
                            <Link to={index.path}>{item.title}</Link>
                            </li>
                        );
                    })}*/}
                </ul>

            </nav>
        </>
    )
}

export default Navbar;