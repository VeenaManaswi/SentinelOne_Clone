import React from 'react';
import '../styles/Top.css';
import search from '../images/search.png'
import globe from '../images/globe.png'
import arrow from '../images/arrowfront.png'

export default function Top() {
  return (
    <div>
      <nav class='head1'>
        <p>A Leader in the 2024 Gartner&reg; Magic Quadrant &trade; for EndPoint Protection Platforms. Four years running.
             &nbsp;&nbsp;&nbsp;&nbsp; Read the Report <img src={arrow}/>   </p>
    </nav>
    <nav class='head2'>
        <ul>
            <li>Experiencing a Breach?</li>
            <li>1-855-868-3733</li>
            <li>Small Business</li>
            <li>Contact</li>
            <li>Cyber Security Blog</li>
            <li><img src={search} alt="search" /></li>
            <li><img src={globe} alt="" />&nbsp;&nbsp;EN</li>
        </ul>
    </nav>
    </div>
  )
}
