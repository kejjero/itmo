import logo from '../../images/header/header__logo.svg'

function Header() {
    return (
        <header className="header">
            <a className="header__logo-link" href="#">
                <img className="logo" src={logo} alt="Логотип"/>
            </a>
            <nav className="header__menu">
                <ul className="header__list">
                    <li className="header__list-item">
                        <a className="header__link" href="#" target="_blank">О нас</a>
                    </li>
                    <li className="header__list-item">
                        <a className="header__link" href="#" target="_blank">Лаборатория</a>
                    </li>
                    <li className="header__list-item">
                        <a className="header__link" href="#" target="_blank">Проекты</a>
                    </li>
                    <li className="header__list-item">
                        <a className="header__link" href="#" target="_blank">Образование</a>
                    </li>
                    <li className="header__list-item">
                        <a className="header__link" href="#" target="_blank">Публикации</a>
                    </li>
                    <li className="header__list-item">
                        <a className="header__link" href="#" target="_blank">Команда</a>
                    </li>
                    <li className="header__list-item">
                        <a className="header__link" href="#" target="_blank">Связаться</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;