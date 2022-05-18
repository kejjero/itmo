function Contacts() {
    return(
        <section className="contacts">
            <h2 className="title">Всегда на связи</h2>
            <p className="contacts__subtitle">
                По всем интересующим вас вопросам вы всегда можете обратиться по указанным телефонам, написать на
                почту или оставить свое сообщение через форму обратной связи.
            </p>
            <form className="contacts__form" action="">
                <div className="contacts__container">
                    <input
                        className="contacts__input contacts__input_difference_height contacts__input_type_name"
                        type="text"
                        placeholder="Имя"
                    />
                    <input
                        className="contacts__input contacts__input_difference_height contacts__input_type_surname"
                        type="text"
                        placeholder="Фамилия"
                    />
                    <input
                        className="contacts__input contacts__input_type_message"
                        type="text"
                        placeholder="Сообщение"
                    />
                    <input
                        className="contacts__input contacts__input_difference_height contacts__input_type_tel"
                        type="tel"
                        placeholder="Телефон"
                    />
                    <input
                        className="contacts__input contacts__input_difference_height contacts__input_type_email"
                        type="email"
                        placeholder="E-mail"
                    />
                </div>
                <button type="submit" className="contacts__button">Отправить</button>
            </form>
        </section>
    )
}

export default Contacts;