import './Nav.css'
import NavItem from './NavItem'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        {/* <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/Users">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav> */}

        <nav className="menu">
            <NavItem href="/" icon="home" title="Início"/>
            <NavItem href="/Users" icon="users" title="Usuários"/>
        </nav>
    </aside>