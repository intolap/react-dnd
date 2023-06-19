import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
        <Link to="https://zingy-palmier-f16aba.netlify.app/">Live URL</Link>
        
        <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/draganddrop/">Dragandrop</Link></li>
            <li><Link to="/triggerclick/">Triggerclick</Link></li>
            <li><Link to="/html2canvas/">Html2Canvas</Link></li>
            <li><Link to="/setfocus/">SetFocus</Link></li>
            <li><Link to="/facebook/">Facebook</Link></li>
            <li><Link to="/placefinder/">Place Finder</Link></li>
            <li><Link to="/SearchLocationInput/">SearchLocationInput</Link></li>
        </ul>
        </>
    )
}
