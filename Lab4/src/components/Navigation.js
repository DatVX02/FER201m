import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Icon } from 'react-materialize'

export default function Navigation() {

  return (
    <>


      <div>

        <Navbar className='menu'
          alignLinks="right"
          brand={<Link to='/'>
            <span className="brand-logo" >Films</span></Link>}
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
        >
          <ul>
            <li> <Link to='/'><Icon left>home</Icon> Home</Link>
            </li>
            <li to='/about'> <Link to='/about'> <Icon left>info_outline</Icon> About</Link>
            </li>
            <li to='/news'> <Link to='/news'> <Icon left>dvr</Icon> News</Link>
            </li>
            <li href='/contact'><Link to='/contact'> <Icon left>contacts</Icon> Contact </Link>
            </li>

          </ul>
        </Navbar>

      </div>

    </>
  )
}
