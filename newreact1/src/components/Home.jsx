import React from 'react'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all your problems</p>
        </main>
      
    </div>

    <div className="home2" >
        <img src={vg} alt="" />
        <div>
            <p>
                we are your one and only solution to the tech problems you face everyday.we are leading tech company whose aim is to increase the problem solving ablility in children.  
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consequatur obcaecati corrupti a praesentium possimus itaque hic doloremque omnis consequuntur, fugiat beatae reprehenderit culpa expedita recusandae. Vitae alias architecto saepe ipsum necessitatibus, assumenda quasi veritatis repudiandae quidem eveniet ab, in voluptas blanditiis perferendis! Ea architecto ullam porro corporis error aspernatur, optio ad ducimus at doloremque minus quos itaque placeat magni ratione est reprehenderit, unde dicta adipisci odio. Sequi, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, cumque minus maiores saepe asperiores recusandae omnis voluptatum quae rem corrupti necessitatibus rerum numquam earum quas eos odit repellat unde magni et. Incidunt, eveniet officia. At aspernatur pariatur distinctio veniam sit amet fuga provident nostrum a officiis velit recusandae, asperiores voluptate exercitationem.</p>
        </div>
    </div>

    <div className="home4"  id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay:'0.3s'
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{
                    animationDelay:'0.5s'
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{
                    animationDelay:'0.7s'
                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style={{
                    animationDelay:'1s'
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home
