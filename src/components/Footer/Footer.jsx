import vk from '../../images/footer/footer__icon-vk.svg'
import facebook from '../../images/footer/footer__icon-facebook.svg'
import telegram from '../../images/footer/footer__telegram.svg'
import instagram from '../../images/footer/footer__icon-instagram.svg'
import youtube from '../../images/footer/footer__youtube.svg'
import logo from '../../images/footer/footer__logo.svg'

function Footer() {
    return(
        <footer className="footer">
            <div className="footer__wrapper">
                <a className="footer__logo-link" href="#">
                    <img className="logo" src={logo} alt=""/>
                </a>
                <p className="footer__university footer_type_text">Информация &copy; 2020 Университет ИТМО</p>
                <p className="footer__description footer_type_text">
                    Национальный центр когнитивных разработок –
                    центр национальной технологической инициативы (НТИ),
                    получивший государственную поддержку по направлению
                    «Технологии машинного обучения и когнитивные технологии».
                    Инфраструктурная основа взаимодействия научных,
                    образовательных и промышленных организаций
                </p>
                <a className="footer__authors footer_type_text footer_type_liks"
                   href="https://github.com/kejjero/itmo"
                   target="_blank">
                    Сделано студентами Яндекс. Практикума
                </a>
                <nav className="footer__main">
                    <h2 className="footer__title">О центре</h2>
                    <a className="footer__item footer_type_text footer_type_liks" href="#">О нас</a>
                    <a className="footer__item footer_type_text footer_type_liks" href="#">Главная</a>
                    <a className="footer__item footer_type_text footer_type_liks" href="#">Команда</a>
                    <a className="footer__item footer_type_text footer_type_liks" href="#">Лаборатория</a>
                    <a className="footer__item footer_type_text footer_type_liks" href="#">Контакты</a>
                </nav>
                <nav className="footer__development">
                    <h2 className="footer__title">Развитие</h2>
                    <a className="footer__item footer_type_text footer_type_liks" href="#">Образование</a>
                    <a className="footer__item footer_type_text footer_type_liks" href="#">Аспирантура</a>
                    <a className="footer__item footer_type_text footer_type_liks" href="#">Магистратура</a>
                    <a className="footer__item footer_type_text footer_type_liks" href="#">Публикации</a>
                    <a className="footer__item footer_type_text footer_type_liks" href="#">Проекты</a>
                </nav>
                <div className="footer__contacts">
                    <h2 className="footer__city">г.Санкт-Петербург</h2>
                    <p className="footer__item footer_type_text">
                        199034, Санкт-Петербург,
                        Биржевая линия, д. 4, лит. М,
                        ауд. 302С
                    </p>
                    <p className="footer__item footer_type_text">
                        <a className="footer__phone" href="tel:+78123376490">+7 (812) 337-64-90</a>
                        <a className="footer__phone" href="tel:+78123376494">+7 (812) 337-64-94</a>
                    </p>
                    <p className="footer__item footer_type_text">anna.lutsenko@itmo.ru</p>
                    <div className="footer__media">
                        <a className="footer__media-link footer_type_liks" href="#">
                            <img
                                className="footer__icon"
                                src={vk}
                                alt="вконтакте"
                            />
                        </a>
                        <a className="footer__media-link footer_type_liks" href="#">
                            <img
                                className="footer__icon"
                                src={facebook}
                                alt="фейсбук"
                            />
                        </a>
                        <a className="footer__media-link footer_type_liks" href="#">
                            <img
                                className="footer__icon"
                                src={telegram}
                                alt="телеграм"
                            />
                        </a>
                        <a className="footer__media-link footer_type_liks" href="#">
                            <img
                                className="footer__icon"
                                src={instagram}
                                alt="инстаграм"
                            />
                        </a>
                        <a className="footer__media-link footer_type_liks" href="#">
                            <img
                                className="footer__icon"
                                src={youtube}
                                alt="ютюб"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;