import Header from '../../components/Header'

import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

import './about.css'

const About = () => {
  return (
    <>
    <Header title='About us' image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea explicabo ut accusantium blanditiis veritatis quos deleniti doloribus accusamus facilis qui.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story" />
        </div>

        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum dolore aliquam non placeat quae amet numquam dolorem nesciunt quisquam dolorum illo provident accusantium dolores, voluptate esse animi consectetur neque?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero tempore laboriosam, maxime cumque sunt doloremque soluta consequatur voluptatum dolores in atque veritatis repellendus voluptatibus nostrum architecto rerum consectetur expedita reiciendis distinctio, at excepturi? At, reprehenderit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, minima neque sapiente excepturi, praesentium adipisci quas delectus voluptatem deleniti rem corrupti iusto eveniet. Temporibus voluptate dignissimos numquam. Repudiandae ad at nemo sint iure?</p>
        </div>

      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision" />
        </div>

        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum dolore aliquam non placeat quae amet numquam dolorem nesciunt quisquam dolorum illo provident accusantium dolores, voluptate esse animi consectetur neque?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero tempore laboriosam, maxime cumque sunt doloremque soluta consequatur voluptatum dolores in atque veritatis repellendus voluptatibus nostrum architecto rerum consectetur expedita reiciendis distinctio, at excepturi? At, reprehenderit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, minima neque sapiente excepturi, praesentium adipisci quas delectus voluptatem deleniti rem corrupti iusto eveniet. Temporibus voluptate dignissimos numquam. Repudiandae ad at nemo sint iure?</p>
        </div>

      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission" />
        </div>

        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum dolore aliquam non placeat quae amet numquam dolorem nesciunt quisquam dolorum illo provident accusantium dolores, voluptate esse animi consectetur neque?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero tempore laboriosam, maxime cumque sunt doloremque soluta consequatur voluptatum dolores in atque veritatis repellendus voluptatibus nostrum architecto rerum consectetur expedita reiciendis distinctio, at excepturi? At, reprehenderit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, minima neque sapiente excepturi, praesentium adipisci quas delectus voluptatem deleniti rem corrupti iusto eveniet. Temporibus voluptate dignissimos numquam. Repudiandae ad at nemo sint iure?</p>
        </div>

      </div>
    </section>
    </>
  )
}

export default About