
function Projects() {
 return(
     <section className="projects">
         <div className="projects__container">
             <h2 className="title">Наши проекты</h2>
             <div className="projects__nav">
                 <button type="button"
                         className="projects__nav_item projects__nav_item_active"
                         id="all-projects"
                         title="projects">Все пороекты
                 </button>
                 <button
                     type="button"
                     className="projects__nav_item"
                     id="gos-projects"
                     title="projects">Гос. проекты
                 </button>
                 <button
                     type="button"
                     className="projects__nav_item"
                     id="spec-projects"
                     title="projects">Спрецпрограммы
                 </button>
                 <button
                     type="button"
                     className="projects__nav_item"
                     id="dev-projects"
                     title="projects">В разработке
                 </button>
             </div>
             <ul className="projects__list">
                 <li className="projects__card">
                     <div className="projects__card_logo">
                     </div>
                     <p className="projects__card_text">Направление включает в себя исследования и разработки
                         технологий МО и
                         КТ. Модули для внедрения в предметные сетевые программы магистратуры
                         с элементами МО и КТ, или программы ДПО.</p>
                     <a href="#" className="projects__card_link">Подробнее</a>
                     <div className="projects__back">
                     </div>
                 </li>
                 <li className="projects__card">
                     <div className="projects__card_logo">
                     </div>
                     <p className="projects__card_text">Направление включает в себя исследования и разработки
                         технологий МО и
                         КТ. Модули для внедрения в предметные сетевые программы магистратуры
                         с элементами МО и КТ, или программы ДПО.</p>
                     <a href="#" className="projects__card_link">Подробнее</a>
                     <div className="projects__back">
                     </div>
                 </li>
                 <li className="projects__card">
                     <div className="projects__card_logo">
                     </div>
                     <p className="projects__card_text">Направление включает в себя исследования и разработки
                         технологий МО и
                         КТ. Модули для внедрения в предметные сетевые программы магистратуры
                         с элементами МО и КТ, или программы ДПО.</p>
                     <a href="#" className="projects__card_link">Подробнее</a>
                     <div className="projects__back">
                     </div>
                 </li>
                 <li className="projects__card">
                     <div className="projects__card_logo">
                     </div>
                     <p className="projects__card_text">Направление включает в себя исследования и разработки
                         технологий МО и
                         КТ. Модули для внедрения в предметные сетевые программы магистратуры
                         с элементами МО и КТ, или программы ДПО.</p>
                     <a href="#" className="projects__card_link">Подробнее</a>
                     <div className="projects__back">
                     </div>
                 </li>
             </ul>
         </div>
     </section>
 )
}
export default Projects;