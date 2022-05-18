import personOne from '../../images/team/team-card-1.jpg'
import personTwo from '../../images/team/team-card-2.jpg'
import personThree from '../../images/team/team-card-3.jpg'
import personFour from '../../images/team/team-card-4.jpg'

function Team() {
    return(
        <section className="team">
            <h2 className="title">наша команда</h2>
            <ul className="team__container">
                <li className="team-card">
                    <img
                        src={personOne}
                        alt="Бобцов Алексей Алексеевич"
                        className="team-card__image"
                    />
                    <h3 className="team-card__name">Бобцов
                        Алексей Алексеевич</h3>
                    <p className="team-card__position">Директор, профессор, ДТН</p>
                </li>
                <li className="team-card">
                    <img
                        src={personTwo}
                        alt="Буханоский Александр Валерьевич"
                        className="team-card__image"
                    />
                    <h3 className="team-card__name">Буханоский
                        Александр Валерьевич</h3>
                    <p className="team-card__position">Директор, руководитель, ДТН</p>
                </li>
                <li className="team-card">
                    <img
                        src={personThree}
                        alt="Муромцев Дмитрий Ильич"
                        className="team-card__image"
                    />
                    <h3 className="team-card__name">Муромцев
                        Дмитрий Ильич
                    </h3>
                    <p className="team-card__position">Руководитель, доцент, КТН</p>
                </li>
                <li className="team-card">
                    <img
                        src={personFour}
                        alt="Матвеев Юрий Николаевич"
                        className="team-card__image"
                    />
                    <h3 className="team-card__name">Матвеев
                        Юрий Николаевич</h3>
                    <p className="team-card__position">Руководитель, профессор, ДТН</p>
                </li>
            </ul>
        </section>
    )
}

export default Team;