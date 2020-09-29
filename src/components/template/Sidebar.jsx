import React from 'react';
import './Sidebar.css'

import SidebarLink from '../SidebarLink'

export default () =>

    <nav className="sidebar shadow-sm">
        <SidebarLink link="/" icon="fa fa-home"/>
        <SidebarLink link="/atividades" icon="fa fa-book"/>
    </nav>