import Link from 'next/link'

export const ButtonsDouble = (props) => (
  <div className="home__section--content-text-buttons" style={{width: props.width}}>
    <button className="btn btn-dark">{props.buttonA}</button>
    <button className="btn btn-dark">{props.buttonB}</button>
  </div>
)

export const ButtonsSingle = (props) => (
  <div className="home__section--content-text-buttons-single" style={{width: props.width}}>
    <button className="btn btn-dark">{props.button}</button>
    <p>
      Are you a Durst tenant?
      <Link href="/about">
        <a>
          <span>Login & Get Started</span>
        </a>
      </Link>
    </p>
  </div>
)