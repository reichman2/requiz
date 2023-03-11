import React from 'react';


interface HeaderProps {
    links: NavLink[];
}

type NavLink = {
    [name: string]: string;
};

export default function Header(props: HeaderProps) {
    return (
        <nav>
            
        </nav>
    );
}