import gazprom from '../../images/partners/partners__gazprom.svg'
import huawei from '../../images/partners/partners__huawei.svg'
import sber from '../../images/partners/partners__sberbank.svg'
import mailru from '../../images/partners/partners__mailru.svg'
import rosveft from '../../images/partners/partners__rosveft.svg'
import siemens from '../../images/partners/partners__siemens.svg'

function Partners() {
    return(
        <section className="partners">
            <div className="partners__text-wrapper">
                <h2 className="title title_type_white">с кем мы работаем</h2>
                <p className="partners__paragraph">За время сотрудничества компания показала себя как надежный
                    партнер,
                    способный оперативно решать вопросы по внесению необходимых изменений.
                </p>
                <p className="partners__paragraph">Отдельно хочется отметить квалифицированный персонал компании,
                    который всегда готов прийти на
                    помощь в решении поставленных задач, дать объективную оценку и свои рекомендации по улучшению
                    деятельности. Надеемся на дальнейшее и плодотворное сотрудничество.
                </p>
            </div>
            <ul className="partners__image-container">
                <li className="partners__img-company">
                    <a className="partners__img-link" href="#">
                        <img
                            className="partners__image"
                            src={gazprom}
                            alt="Газпром"
                        />
                    </a>
                </li>
                <li className="partners__img-company">
                    <a className="partners__img-link" href="#">
                        <img className="partners__image" src={sber}
                             alt="Сбербанк"
                        />
                    </a>
                </li>
                <li className="partners__img-company">
                    <a className="partners__img-link" href="#">
                        <img className="partners__image" src={mailru}
                             alt="Мейл.ру"
                        />
                    </a>
                </li>
                <li className="partners__img-company">
                    <a className="partners__img-link" href="#">
                        <img className="partners__image" src={siemens}
                             alt="Сименс"
                        />
                    </a>
                </li>
                <li className="partners__img-company">
                    <a className="partners__img-link" href="#">
                        <img className="partners__image" src={huawei}
                             alt="Хуавей"
                        />
                    </a>
                </li>
                <li className="partners__img-company">
                    <a className="partners__img-link" href="#">
                        <img className="partners__image" src={sber}
                             alt="Сбербанк"
                        />
                    </a>
                </li>
                <li className="partners__img-company">
                    <a className="partners__img-link" href="#">
                        <img className="partners__image" src={rosveft}
                             alt="Роснефть"
                        />
                    </a>
                </li>
                <li className="partners__img-company">
                    <a className="partners__img-link" href="#">
                        <img className="partners__image" src={gazprom}
                             alt="Газпром"
                        />
                    </a>
                </li>
                <li className="partners__img-company">
                    <a className="partners__img-link" href="#">
                        <img className="partners__image" src={huawei}
                             alt="Хуавей"
                        />
                    </a>
                </li>
                <li className="partners__img-company">
                    <a className="partners__img-link" href="#">
                        <img className="partners__image" src={mailru}
                             alt="Мейл.ру"
                        />
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Partners;