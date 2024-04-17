import { lazy } from 'react';
import '../styles/home.css';
import { Headline1 } from './strings.jsx';
import mypic from '/Assets/large/myPic.jpg';
import mypicSm from '/Assets/small/myPic-sm.jpg';
const Skills = lazy(() => import('./Skills'));
const Badges = lazy(() => import('./Badges'));
const Image = lazy(() => import('react-bootstrap/Image'));
const Typewriter = lazy(() => import('typewriter-effect'));

export default function Home() {
    return (
        <div className="Home">
            <div className="parent">
                <Image className="Image" src={mypic} srcSet={mypicSm + ' 480w,' + mypic + ' 1080w'} sizes="auto" height="40vmax" width="50vmax" alt="Vivek Kaushik pic" />
                <div className="headline">
                    <h1 id="home_title">
                        <Typewriter
                            options={{
                                strings: ['Microsoft Certified Azure Developer', 'Microsoft Certified Azure Data Engineer', 'Microsoft Certified Azure IoT Specialist', 'Full Stack Software Developer', 'Tech Enthusiast', 'Blogger', 'Writer', 'Thinker'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p>{Headline1}</p>
                </div>
            </div>
            <Badges />
            <Skills />
        </div >
    );
}
