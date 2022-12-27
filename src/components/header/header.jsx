import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (

      <header>
        <div>
          <div className="topNav">
              <Image alt="jet medical logo" src={'/images/logo_jet.png'} width={100} height={50} />
              
              <nav>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/events">Events</Link></li>
                  <li><Link href="/about-us">About Us</Link></li>
                  
                </ul>
              </nav>

          </div>
          <p className="title">This is Jet Medical test site</p>
        </div>
      </header>

  )
}

export default Header