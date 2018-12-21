import '../style.scss'
const imagePlaceholder = 'https://www.amnacademy.com/wp-content/uploads/2017/03/placeholder-1.jpg';


const HomeSection = (props) => (
  <div className="home__section">
    <div className="home__section--content">
      <div className="home__section--content-text" style={{order: props.textOrder}}>
        <h1 style={{width: props.width}}>{props.title}</h1>
        <h5 style={{width: props.width, fontSize: props.size}}>{props.sub}</h5>
        {props.note}
        {props.button}
      </div>
      <div className="home__section--content-image" style={{order: props.imageOrder}}>
        <img src={imagePlaceholder} alt="placeholder"/>
      </div>
    </div>
  </div>
)

export default HomeSection