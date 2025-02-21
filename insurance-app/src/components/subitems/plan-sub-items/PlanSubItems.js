import React, {useState} from "react";
import {PlanDropDown} from "../../navbar/NavItems"
import {Link} from "react-router-dom";
import "./PlanSubItem.css"

function PlanSubItems( ) {
    const [dropdown, setDropdown] = useState(false)
    const handleDropdownToggle = () => {setDropdown(!dropdown)}
    return (
            <ul className={dropdown ? "plan-sub-items clicked": "plan-sub-items" }
                onClick= {handleDropdownToggle}
            >
                {PlanDropDown.map((item, index) => {
                    return (
                        <li key={item.id}>
                            <Link to={item.path} className={item.cName} onClick={()=>setDropdown(false)}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
    )
}

export default PlanSubItems;