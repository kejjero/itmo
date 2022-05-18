import publicationOne from '../../images/publications/publication-1.png'
import publicationTwo from '../../images/publications/publication-2.png'
import publicationThree from '../../images/publications/publication-3.png'
import publicationFour from '../../images/publications/publication-4.png'
import publicationFive from '../../images/publications/publication-5.png'
import publicationSix from '../../images/publications/publication-6.png'

function Publications() {
    return (
        <section className="publications">
            <h2 className="title">Публикации</h2>
            <ul className="publications__list">
                <li className="publication">
                    <article className="publication__container">
                        <img
                            src={publicationOne}
                            className="publication__image"
                        />
                        <h3 className="publication__title">Topic-driven Ensemble for Online Advertising
                            Generation</h3>
                        <p className="publication__name">Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko,
                            Maxim Petrov, Denis Nasonov</p>
                        <p className="publication__content">Online advertising is one of the
                            most widespread ways to reach and increase a target audience
                            for those selling products. Usually having a form of a banner,
                            advertising engages users into visiting a corresponding webpage.
                            Professional generation of banners requires creative and writing
                            skills and a basi…</p>
                    </article>
                    <div className="publication__detail">
                        <a href="#" className="publication__link">Читать полностью &#8594</a>
                        <button
                            className="publication__button"
                            type="button">
                        </button>
                    </div>
                </li>
                <li className="publication">
                    <article className="publication__container">
                        <img
                            src={publicationTwo}
                            className="publication__image"
                        />
                        <h3 className="publication__title">Convolutional neural networks with hierarchical
                            context transfe…</h3>
                        <p className="publication__name">Ksenia D Mukhina, Alexander A Visheratin, Denis
                            Nasonov</p>
                        <p className="publication__content">In this work, we consider a problem of predicting
                            the next
                            state of a given area using retrospective information. The proposed concept of
                            hierarchical
                            context transfer (HCT) operates on several spatial levels of the input data to
                            overcome major
                            issues of next state prediction problems - density variability, a sig…</p>
                    </article>
                    <div className="publication__detail">
                        <a href="#" className="publication__link">Читать полностью &#8594</a>
                        <button className="publication__button" type="button">
                        </button>
                    </div>
                </li>
                <li className="publication">
                    <article className="publication__container">
                        <img
                            src={publicationThree}
                            className="publication__image"
                        />
                        <h3 className="publication__title">Spatiotemporal Filtering Pipeline for Efficient
                            Social Networks Dat…</h3>
                        <p className="publication__name">Ksenia Mukhina, Alexander Visheratin, Denis
                            Nasonov</p>
                        <p className="publication__content">One of the areas that gathers momentum is the
                            investigation of location-based
                            social networks (LBSNs) because the understanding of citizens’ behavior on various
                            scales can help to
                            improve quality of living, enhance urban management, and advance the development
                            of smart cities.
                            But it is widely known that the…</p>
                    </article>
                    <div className="publication__detail">
                        <a href="#" className="publication__link">Читать полностью &#8594</a>
                        <button className="publication__button" type="button">
                        </button>
                    </div>
                </li>
                <li className="publication">
                    <article className="publication__container">
                        <img
                            src={publicationFour}
                            className="publication__image"
                        />
                        <h3 className="publication__title">Hybrid Intellectual Scheme for Scheduling of
                            Heterogeneous Wo…</h3>
                        <p className="publication__name">Mikhail Melnik, Ivan Dolgov, Denis Nasonov</p>
                        <p className="publication__content">Scheduling of workload in distributed computing
                            systems is a well-known
                            optimization proble. A workload may include single independent software packages.
                            However, the
                            computational process in scientific and industrial fields is often organized as
                            compos…</p>
                    </article>
                    <div className="publication__detail">
                        <a href="#" className="publication__link">Читать полностью &#8594</a>
                        <button className="publication__button" type="button">
                        </button>
                    </div>
                </li>
                <li className="publication">
                    <article className="publication__container">
                        <img
                            src={publicationFive}
                            className="publication__image"
                        />
                        <h3 className="publication__title">Detection of housing and utility problems in
                            districts through soc…</h3>
                        <p className="publication__name">Alexandr Zamiralov, Maria Khodorchenko, Denis
                            Nasonov</p>
                        <p className="publication__content">Social media stores a significant amount of
                            information which
                            can be used for extraction of specific knowledge. A variety of topics that arise
                            there concerns
                            a lot of everyday life aspects, including urban-related problems. In this work, we
                            demonstrate
                            the way of using the texts from social media on the topic of ho…</p>
                    </article>
                    <div className="publication__detail">
                        <a href="#" className="publication__link">Читать полностью &#8594</a>
                        <button className="publication__button" type="button">
                        </button>
                    </div>
                </li>
                <li className="publication">
                    <article className="publication__container">
                        <img
                            src={publicationSix}
                            className="publication__image"
                        />
                        <h3 className="publication__title">Decoupling graph convolutional networks for
                            large-scale supervis…</h3>
                        <p className="publication__name">Mariia Koreneva, Alexander A Visheratin, Denis
                            Nasonov</p>
                        <p className="publication__content">We present a new approach to large-scale
                            supervised heterogeneous
                            graph classification. We decouple a large heterogeneous graph into smaller
                            homogeneous ones.
                            In this paper, we show that our model provides results close to the
                            state-of-the-art model while
                            greatly simplifying calculations and makes it possible…</p>
                    </article>
                    <div className="publication__detail">
                        <a href="#" className="publication__link">Читать полностью &#8594</a>
                        <button
                            className="publication__button"
                            type="button">
                        </button>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Publications;