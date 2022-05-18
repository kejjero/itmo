import '../scss/styles/App.scss'
import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import Laboratory from "./Laboratory/Laboratory";
import Projects from "./Projects/Projects";
import Education from "./Education/Education";
import Publications from "./Publications/Publications";
import Team from "./Team/Team";
import Partners from "./Partners/Partners";
import Contacts from "./Contacts/Contacts";
import Map from "./Map/Map";
import Footer from "./Footer/Footer";

function App() {
  return (
      <>
          <Header/>
          <main>
              <Intro/>
              <Laboratory/>
              <Projects/>
              <Education/>
              <Publications/>
              <Team/>
              <Partners/>
              <Contacts/>
              <Map/>
          </main>
          <Footer/>
      </>
  )
}

export default App;
