import photo from '../../images/education/education__photo.png'

function Education() {
    return(
        <section className="education">
            <h2 className="title title_type_white">Образование</h2>
            <p className="education__description">В образовательной деятельности НЦКР активно использует
                существующую в Университете ИТМО
                инфраструктуру и опыт реализации сетевых форм обучения, опираясь на вузы-диссеминаторы (ННГУ,
                ДВФУ, ФГБОУ ВО «МГТУ «СТАНКИН»,
                НовГУ), а также профильную компанию ООО «НЦЭО» в области электронного и дистанционного
                образования. Реализуются
                образовательные программы различных форматов.</p>
            <div className="education__main-container">
                <div className="education__info">
                    <h3 className="education__info-title">Образовательные программы аспирантуры в области МО и
                        КТ</h3>
                    <ul className="education__list">
                        <li className="education__programm">• Прикладные технологии искусственного интеллекта</li>
                        <li className="education__programm">• Машинное обучение и искусственный интеллект</li>
                        <li className="education__programm">• Биометрические информационные системы</li>
                        <li className="education__programm">• Речевые информационные системы</li>
                        <li className="education__programm">• Когнитивные вычисления и квантовый интеллект</li>
                        <li className="education__programm">• Большие данные и экстренные вычисления</li>
                        <li className="education__programm">• Семантические системы и инженерия знаний</li>
                        <li className="education__programm">• Технологии разработки компьютерных игр</li>
                    </ul>
                    <a href="#" className="education__more">Подробнее &rarr;</a>
                </div>
                <img
                    className="education__photo"
                    src={photo}
                    alt="Выпускники"
                />
            </div>
            <div className="education__buttons">
                <button className="education__button" type="button">Аспирантура</button>
                <button className="education__button education__button_active" type="button">Магистратура</button>
            </div>
        </section>
    )
}

export default Education;