import Header from '../components/Header'
import Footer from '../components/Footer'
import content from '../content/content'
const placeholder = 'https://www.syncron.com/wp-content/uploads/2017/03/img-placeholder.png'

const About = () => (
  <div>
    <Header />
    <div className="about__content--container">
      <div className="spacer"></div>
      <div className="about__content--text">
        <h4>{content.about.description}</h4>
      </div>
      <div className="about__content--partners">
          <h4>Partners</h4>
          <div className="about__content--partners-layout">
            <img src={placeholder} alt="placeholder"/>
            <img src={placeholder} alt="placeholder" />
            <img src={placeholder} alt="placeholder" />
            <img src={placeholder} alt="placeholder" />
            <img src={placeholder} alt="placeholder" />
          </div>
      </div>
      <div className="about__content--press">
        <h4>Press</h4>
        <div className="about__content--partners-layout">
          <img src={placeholder} alt="placeholder" />
          <img src={placeholder} alt="placeholder" />
          <img src={placeholder} alt="placeholder" />
          <img src={placeholder} alt="placeholder" />
        </div>
      </div>
      <div className="spacer"></div>
    </div>
    <Footer />
  </div>
)

export default About