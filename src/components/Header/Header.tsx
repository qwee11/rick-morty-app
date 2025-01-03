import './style.scss';
import logo from '../../assets/logo.png'
import HeaderNav from './HeaderNav';

type props = {
    theme: 'dark' | 'light',
    setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>
}

const Header = ({theme, setTheme}: props) => {
  return (
    <header className='header' >
        <div className='header__content container' >
            <div className='header__content__logo' >
                <img src={logo} alt="logo" />
            </div>
            <HeaderNav setTheme={setTheme} theme={theme} />
        </div>
    </header>
  )
}

export default Header