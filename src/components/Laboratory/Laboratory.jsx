import miniIcon from '../../images/laboratory/laboratory__mini-icon.svg'
import imageOne from '../../images/laboratory/laboratory__image1.png'
import imageTwo from '../../images/laboratory/laboratory__image2.png'
// backgrounds
import backgroundOne from '../../images/laboratory/laboratory__background.jpg'
import backgroundTwo from '../../images/laboratory/laboratory__background2.jpg'
import backgroundThree from '../../images/laboratory/laboratory__background3.jpg'
import backgroundFour from '../../images/laboratory/laboratory__background4.jpg'
//icons
import iconOne from '../../images/laboratory/laboratory__icon.svg'
import iconTwo from '../../images/laboratory/laboratory__icon2.svg'
import iconThree from '../../images/laboratory/laboratory__icon3.svg'
import iconFour from '../../images/laboratory/laboratory__icon4.svg'

function Laboratory () {
    return(
        <section className="laboratory">
            <div className="laboratory__contain">
                <h2 className="title title_type_black">Industrial ai research lab</h2>
                <div className="laboratory__foreword-wrapper">
                    <div className="laboratory__paragraphs">
                        <p className="laboratory__paragraph">
                            Центр национальной технологической инициативы (НТИ), получивший государственную
                            поддержку
                            по направлению «Технологии машинного обучения
                            и когнитивные технологии».</p>
                        <p className="laboratory__paragraph">
                            Мы изучаем проблемы и выявляем, когда мы работаем вместе с нашими клиентами, новые
                            решения находят, не задумываясь. Работая таким образом
                            и проявляя гибкость, мы можем поддерживать новый подход для удовлетворения
                            потребностей наших клиентов.
                        </p>
                        <img
                            className="laboratory__mini-icon"
                            width="24" height="22.7"
                            src={miniIcon}
                            alt="символ машинное обучение"
                        />
                    </div>
                    <div className="laboratory__images-wrapper">
                        <img
                            className="laboratory__image"
                            width="264"
                            height="276"
                            src={imageOne}
                            alt="Специалист"
                        />
                        <img
                            className="laboratory__image"
                            width="264"
                            height="276"
                            src={imageTwo}
                            alt="Специалисты"
                        />
                    </div>
                </div>
                <ul className="laboratory__cards">
                    <li className="laboratory__card">
                        <img
                            className="laboratory__card-background"
                            width="255"
                            height="430"
                            src={backgroundOne}
                            alt="Цифры"
                        />
                        <div className="laboratory__card-overlay">
                            <div className="laboratory__card-wrapper">
                                <h3 className="laboratory__card-title">Анализ социальных данных</h3>
                                <div className="laboratory__card-circle">
                                    <img
                                        className="laboratory__card-icon"
                                        src={iconOne}
                                        alt="Анализ данных"
                                    />
                                </div>
                                <p className="laboratory__card-paragraph">Направление включает в себя
                                    исследования и разработки технологий МО и КТ</p>
                                <button
                                    className="laboratory__card-button"
                                    type="button">Подробнее
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="laboratory__card">
                        <img
                            className="laboratory__card-background"
                            width="255"
                            height="430"
                            src={backgroundTwo}
                            alt="Цифры"
                        />
                        <div className="laboratory__card-overlay">
                            <div className="laboratory__card-wrapper">
                                <h3 className="laboratory__card-title">Инфраструктура больших
                                    данных</h3>
                                <div className="laboratory__card-circle">
                                    <img
                                        className="laboratory__card-icon"
                                        src={iconTwo}
                                        alt="Анализ данных"
                                    />
                                </div>
                                <p className="laboratory__card-paragraph">Направление включает в себя
                                    исследования и разработки технологий МО и КТ</p>
                                <button className="laboratory__card-button" type="button">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="laboratory__card">
                        <img
                            className="laboratory__card-background"
                            width="255"
                            height="430"
                            src={backgroundThree}
                            alt="Цифры"
                        />
                        <div className="laboratory__card-overlay">
                            <div className="laboratory__card-wrapper">
                                <h3 className="laboratory__card-title">Облачные вычисления</h3>
                                <div className="laboratory__card-circle">
                                    <img
                                        className="laboratory__card-icon"
                                        src={iconThree}
                                        alt="Анализ данных"
                                    />
                                </div>
                                <p className="laboratory__card-paragraph">
                                    Направление включает в себя
                                    исследования и разработки технологий МО и КТ
                                </p>
                                <button
                                    className="laboratory__card-button"
                                    type="button">Подробнее
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="laboratory__card">
                        <img
                            className="laboratory__card-background"
                            width="255"
                            height="430"
                            src={backgroundFour}
                            alt="Цифры"
                        />
                        <div className="laboratory__card-overlay">
                            <div className="laboratory__card-wrapper">
                                <h3 className="laboratory__card-title">QA системы</h3>
                                <div className="laboratory__card-circle">
                                    <img
                                        className="laboratory__card-icon"
                                        src={iconFour}
                                        alt="Анализ данных"
                                    />
                                </div>
                                <p className="laboratory__card-paragraph">Направление включает в себя
                                    исследования и разработки технологий МО и КТ</p>
                                <button
                                    className="laboratory__card-button"
                                    type="button">Подробнее
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Laboratory;