import "./Nav.css";
import React from "react";
import NavItem from "./NavItem";

export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      <a href="/">
        <NavItem icon="home" label="Início" />
      </a>
      <a href="/users">
        <NavItem icon="users" label="Usuários" />
      </a>
    </nav>
  </aside>
);
