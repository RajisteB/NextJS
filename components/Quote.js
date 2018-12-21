import '../style.scss'
import content from '../content/content.js'


const Quote = () => (
  <div className="home__quote">
    <h2>{content.home.quote}</h2>
    <h2>{content.home.quoteAttribute}</h2>
  </div>
)

export default Quote;