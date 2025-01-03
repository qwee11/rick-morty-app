import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

type props = {
    theme: 'dark' | 'light',
    setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>
}

const HeaderNav = ({ theme, setTheme }: props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='header__content__nav' >
            <div
                className={`header__content__nav__hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
                role='button'
                onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}
            ></div>
            <ul className={`${isMenuOpen ? 'menu-open' : ''}`} >
                <li onClick={() => setIsMenuOpen(false)} ><NavLink to={'/characters'} >Characters</NavLink></li>
                <li onClick={() => setIsMenuOpen(false)} ><NavLink to={'/locations'} >Locations</NavLink></li>
                <li onClick={() => setIsMenuOpen(false)} ><NavLink to={'/episodes'} >Episodes</NavLink></li>
                <li>
                    <div
                        className='header__content__nav__theme-button'
                        role='button'
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    >
                        Change Theme
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderNav