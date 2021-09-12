import Link from "./Link"
import { useState } from "react";

export default function Aside({ profileimg, toggleTime }) {

    const [timeFrame, settimeFrame] = useState([
        {
            name: "Daily",
            active: false
        },
        {
            name: "Weekly",
            active: true
        },
        {
            name: "Monthly",
            active: false
        }])

    function handleLinkClick(e) {
        e.preventDefault()
        settimeFrame([...timeFrame].map(object => {
            return object.active = false
        }))

        settimeFrame([...timeFrame].map(object => {
            if (e.target.innerText === object.name) {
                toggleTime(object.name)
                return {
                    ...object,
                    active: true
                }
            }
            else return object;
        }))
    }

    return (
        <aside className="aside">
            <div className="profile-card">
                <div className="profile-pic">
                    <img src={profileimg} alt="jeremy" />
                </div>
                <h1 className="heading">
                    <span>Report for</span>
                    <span className="name">Jeremy Robson</span>
                </h1>
            </div>
            <nav>
                <ul className="nav__links">
                    {timeFrame.map((link) => <li key={link.name}><Link name={link.name} handleLinkClick={handleLinkClick} active={link.active} /></li>)}
                </ul>
            </nav>
        </aside>
    )
}
