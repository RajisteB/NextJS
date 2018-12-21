import Link from 'next/link'
import Header from '../components/Header.js'
import Footer from '../components/Footer'
import HomeSection from '../components/Home-Section.js'
import Quote from '../components/Quote.js'
import content from '../content/content'
import { ButtonsDouble, ButtonsSingle } from '../components/Buttons'
import Features from '../components/Features';

const Note = (props) => (
  <div className="home__section--content-note" style={{width: props.width}}>
    <h4>{props.noteHeading}</h4>
    <h3>{props.noteTitle}</h3>
    <h4>{props.note}</h4>
  </div>
)

const Index = () => (
  <div>
    <Header />
    <div className="spacer"></div>
    
    {/* Section ONE */}
    <HomeSection 
      textOrder="1" 
      imageOrder="2"
      width="60%"
      size="20px"
      title={content.home.section_one.title}
      sub={content.home.section_one.sub} 
      button={ <ButtonsDouble buttonA="Tenement Login" buttonB="Request Access" width="60%"/> }
    />
    <Quote />
    
    {/* Section TWO */}
    <div className="section__heading">
      <h2>What's Possible</h2>
    </div>
    <HomeSection 
      textOrder="2" 
      imageOrder="1"
      width="80%"
      size="26px"
      title={content.home.section_two.title}
      sub={content.home.section_two.sub} 
      note={ <Note 
                noteHeading={content.home.section_two.note.header}
                noteTitle={content.home.section_two.note.title}
                note={content.home.section_two.note.sub}
                width="80%"
              /> 
            }
      button={ <ButtonsSingle button="Learn More" width="80%"/> }
    />
    <div className="spacer"></div>
    <div className="spacer"></div>

    {/* Section THREE */}
    <HomeSection 
      textOrder="1" 
      imageOrder="2"
      width="80%"
      size="26px"
      title={content.home.section_three.title}
      sub={content.home.section_three.sub} 
      note={ <Note 
                noteHeading={content.home.section_three.note.header}
                noteTitle={content.home.section_three.note.title}
                note={content.home.section_three.note.sub}
                width="80%"
              /> 
            }
      button={ <ButtonsSingle button="Learn More" width="80%"/> }
    />
    <div className="spacer"></div>
    <div className="spacer"></div>

    {/* Section FOUR */}
    <HomeSection 
      textOrder="2" 
      imageOrder="1"
      width="85%"
      size="26px"
      title={content.home.section_four.title}
      sub={content.home.section_four.sub} 
      note={ <Note 
                noteHeading={content.home.section_four.note.header}
                noteTitle={content.home.section_four.note.title}
                note={content.home.section_four.note.sub}
                width="85%"
              /> 
            }
      button={ <ButtonsSingle button="Learn More" width="85%"/> }
    />
    <div className="spacer"></div>
    <div className="spacer"></div>
     <Features />
     <div className="sales">
       <h1>Are you an owner/manager and want Spireworks installed on your building?</h1>
       <Link href="/contact">
          <a>
            Contact our sales team.
          </a>
       </Link>
     </div>
     <Footer />
  </div>
)

export default Index