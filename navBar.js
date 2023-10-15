import './customCSS/navbar.css'
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ListIcon from './customIcon/list';

export default function NavBar({mode, setMode, sideBar, openSideBar}){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const menuOpener = ()=>{
        console.log(sideBar)
        openSideBar(!sideBar)
    }
    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      const navSize = windowWidth <= 1200 ? `container-fluid justify-content-between` :`mt-3 rounded-pill w-75`
      const atagSize = windowWidth <= 1200 ? `container-fluid ms-4` :`ms-4 `
    return(
        <div>
            <div className='d-flex justify-content-center' style={{ fontFamily: 'lexendMed' }}>
                <nav className={`navbar navbar-expand navbar_${mode} ${navSize}`}>
                    <Link className={`${atagSize} nav-link active`} to="/mernReactTask6">
                        Arush Shrivastava
                    </Link>
                    <div className='d-xl-none container-fluid justify-content-end align-items-center'>
                        <ListIcon onClick={menuOpener}/>
                    </div>
                    <div className='ms-5 collapse navbar-collapse row justify-content-between'>
                        <div className="d-flex justify-content-between col-4 d-none d-xl-flex">
                            <div className='nav-item dropdown'>
                                <Link className={`nav-link dropdown-toggle`} role="button" id="Dropdown" data-bs-toggle="dropdown" aria-expanded="false">Projects</Link>
                                <div className={`dropdown-menu drop_${mode}`} aria-labelledby="Dropdown">
                                    <Link className="dropdown-item" to={'/mernReactTask6/deadlockchatbox'}>Deadlock Chatbox</Link>
                                    <hr class="dropdown-divider"></hr>
                                    <Link className="dropdown-item" to={'/mernReactTask6/passguard'}>Pass Guard</Link>
                                    <hr class="dropdown-divider"></hr>
                                    <Link className="dropdown-item" to={'/mernReactTask6/hisabbook'}>Hisab Book</Link>
                                </div>
                            </div>
                            <Link className={`nav-link`} to='/mernReactTask6/certificate'>
                                Certificates
                            </Link>
                        </div>
                        <div className="d-flex justify-content-between col-4 me-4 d-none d-xl-flex">
                            <Link className={`nav-link`} to='/mernReactTask6/about    '>
                                About
                            </Link>
                            <Link className={`nav-link`} to="/mernReactTask6/contact">
                                Contact
                            </Link>
                            <DarkModeToggle mode={mode}
                                size="sm" 
                                inactiveTrackColor='#3457D5'
                                inactiveTrackColorOnHover="#0047AB"
                                inactiveTrackColorOnActive="#cbd5e1"
                                inactiveThumbColor='#FFBF00'
                                activeTrackColor="#CF9FFF"
                                activeTrackColorOnHover="#df4ddf"
                                activeThumbColor='Black'
                                onChange={(mode) => {
                                    setMode(mode);
                                }}/>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export function SideBar({mode, setMode}) {
  return (
    <div className="position-fixed" style={{ top: 0, bottom: 0, height: '100%', zIndex: 1, fontFamily:'lexendMed' }}>
      <nav id="sidebarMenu" className={`collapse d-block sidebar collapse sideBarColor${mode}`}>
        <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 ">
                <Link to='/mernReactTask6' className="list-group-item list-group-item-action py-3 ripple" style={{fontSize:'large'}}>
                <i className="fas fa-tachometer-alt fa-fw"></i><span>Arush Shrivastava</span>
                </Link>
                <div className='list-group-item list-group-item-action py-3 ripple'>
                    <a className={`nav-link ${mode} dropdown-toggle`} role="button" id="Dropdown" data-bs-toggle="dropdown" aria-expanded="false" href={() => {}}>Projects</a>
                    <div className={`dropdown-menu drop_${mode}`} aria-labelledby="Dropdown">
                        <Link to={'/mernReactTask6/deadlockchatbox'} className="dropdown-item" href={() => {}}>
                        Deadlock Chatbox
                        </Link>
                        <Link to={'/mernReactTask6/passguard'} className="dropdown-item" href={() => {}}>
                            Pass Guard
                        </Link>
                        <Link to={'/mernReactTask6/hisabbook'} className="dropdown-item" href={() => {}}>
                        Hisab Book
                        </Link>
                    </div>
                </div>
                <Link to='/mernReactTask6/certificate' className={`nav-link ${mode} list-group-item list-group-item-action py-3 ripple`} href={() => {}}>
                    Certificates
                </Link>
                <Link to='/mernReactTask6/about' className={`nav-link ${mode} list-group-item list-group-item-action py-3 ripple`} href={() => {}}>
                    About
                </Link>
                <Link to='/mernReactTask6/contact' className={`nav-link ${mode} list-group-item list-group-item-action py-3 ripple`} href={() => {}}>
                    Contact
                </Link>
                <div className='list-group-item list-group-item-action py-2 ripple'>
                    <DarkModeToggle mode={mode}
                        size="sm" 
                        inactiveTrackColor='#3457D5'
                        inactiveTrackColorOnHover="#0047AB"
                        inactiveTrackColorOnActive="#cbd5e1"
                        inactiveThumbColor='#FFBF00'
                        activeTrackColor="#CF9FFF"
                        activeTrackColorOnHover="#df4ddf"
                        activeThumbColor='Black'
                        onChange={(mode) => {
                            setMode(mode);
                    }}/>
                </div>
            </div>
        </div>
      </nav>
    </div>
  );
}