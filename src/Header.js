import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/draganddrop/">Dragandrop</Link></li>
            <li><Link to="/triggerclick/">Triggerclick</Link></li>
            <li><Link to="/html2canvas/">Html2Canvas</Link></li>
            <li><Link to="/setfocus/">SetFocus</Link></li>
            <li><Link to="/facebook/">Facebook</Link></li>
        </ul>
    )
}
