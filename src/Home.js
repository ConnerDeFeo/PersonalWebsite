import { Button, Card, CardFooter, CardImg, Col, Container, Row } from 'reactstrap';
import HeaderImage from './images/ConnerDeFeo.png'
import SaveTheBees from './images/SaveTheBees.jpg'
import NightClubs from './images/NightClub.jpg'
import ChatRoom from './images/ChatRoom.jpg'
import PersonalWebsite from './images/PersonalWebsite.jpg'
import Professional from './images/Professional.jpg'
import { useNavigate } from 'react-router-dom';
import agile from './images/skills/agile.webp';
import angular from './images/skills/angular.webp';
import c from './images/skills/C.webp';
import cPlusPlus from './images/skills/C++.webp';
import css from './images/skills/css.webp';
import flask from './images/skills/flask.webp';
import html from './images/skills/html.webp';
import java from './images/skills/Java.webp';
import javaFx from './images/skills/JavaFX.webp';
import js from './images/skills/js.webp';
import linux from './images/skills/linux.webp';
import nodejs from './images/skills/nodeJS.webp';
import oop from './images/skills/OOP.png';
import python from './images/skills/python.webp';
import react from './images/skills/React.webp';
import scrum from './images/skills/scrum.webp';
import spring from './images/skills/spring.png';
import windows from './images/skills/Windows.webp';
import wireshark from './images/skills/wireshark.webp';

const skillImages = {'agile':agile,'angular':angular,'c':c,'c++':cPlusPlus,'css':css,'flask':flask,'html':html,'java':java,'javaFx':javaFx,
'js':js,'linux':linux,'nodejs':nodejs,'oop':oop,'python':python,'react':react,'scrum':scrum,'spring':spring,'windows':windows,'wireshark':wireshark};

const centeredText="col-10 col-lg-6 mx-auto text-center";

function Project(image, alt, text, date){
  const navigate=useNavigate();
  return(
    <Col className='col-12 col-md-6'>
      <Card className='m-3 projectCardCustom' onClick={()=>navigate(alt)}>
        <CardImg src={image} alt={alt} className='cardImageCustom'/>
        <CardFooter><Container><Row><Col style={{position:'absolute'}}><strong>{text}</strong></Col><Col className='text-end'><strong>{date}</strong></Col></Row></Container></CardFooter>
      </Card>
    </Col>
  );
}

function Home() { 

  const keys=Object.keys(skillImages);

  return (
    <div>
        <img src={HeaderImage} alt='Start 400m' style={{width:'100%'}}/>
        <p className={centeredText}>Photo: Vayfor</p>
        <h1>Recent Projects - <a href='https://github.com/ConnerDeFeo/' rel="noreferrer" target="_blank"className='githubLink'>Github</a></h1>
        <Container className='mw-100'>
            <Row>
              {Project(PersonalWebsite,"personalWebsite",<>This Website! - <em>Personal</em></>,<>2025</>)}
              {Project(SaveTheBees,"saveTheBees",<>Save The Bees - <em>Intro to SWEN</em></>,<>2024</>)}
            </Row>
            <Row>
              {Project(NightClubs,"nightClubs",<>Nightclubs - <em>Web Engineering</em></>,<>2024</>)}
              {Project(ChatRoom,"chatRoom",<>ChatRoom - <em>Web Engineering</em></>,<>2024</>)}
            </Row>
        </Container>  
        <div className='d-grid justify-content-center'>
            <h1 className={centeredText+" my-4"}>About Me</h1>
            <p className={centeredText}><strong>I am currently attending the Rochester Institute of Technology, pursuing a BS in 
            Software Engineering with a minor in Accounting. I am part of the varsity track team and currently hold the school record in the 400m, 500m, and 4x400m.</strong><br/></p>
            <img src={Professional} alt='Professional' className='mx-auto professionalStyling'/>
            <br/><p className={centeredText}>I spend a good part of my free time reading books relating to finance/investing, software, philosophy, and psychology.
            If I'm not reading then I'm either working on a personal project, doing reaserch on companies to invest in, or working out.</p>
            <Button as="a" href='https://drive.google.com/file/d/1kNQ1leiMq9Io0Uc6jvgZSdGbA_c2Jso8/view?usp=sharing' 
            target="_blank" color='light' className='mx-auto resumeDownload my-5 border border-black'>Download Resume</Button>
        </div>
        <h1 className={"my-4"}>Skills</h1>
        <Container className="text-center mw-80">
            <Row >
                {keys.map((key,index)=>(<Col xs={6} sm={6} md={2}><img src={skillImages[key]} alt='key' key={index} className='skillImages my-3'/></Col>))}
            </Row>
        </Container>
        <h1>Experience</h1>
        <div className='d-grid w-75 mx-auto my-5'>
            <div className='mb-4'>
                <h3 className='my-3'>Accesible Learning Labs | Rochester, NY | January 2025-Present</h3>
                <h4>Software Engineer</h4>
                <ul className='fs-5 mt-3'>
                    <li>Worked in a team of 3 to Ideate and design a web-based application.</li>
                    <li>Developed full-stack features such as avatar creation, teammate selection, opponent selection, and
                    gamified the overall user experience.</li>
                </ul>
                <p>Tools - React, Tailwind, NODE.js, PostgreSQL</p>
            </div>
            <div>
                <h3 className='my-3'>Stellar Roofing | Rochester, NY | November 2023-January 2025</h3>
                <h4>Sales Representative</h4>
                <ul className='fs-5 mt-3'>
                    <li>Door-to-door sales scheduling roofing estimates. Obtained 2nd highest closing rate of over 30 sales
                    representatives.</li>
                    <li>Trained new hires to navigate conversations most effectively.</li>
                </ul>
                <p>Tools - Effective Comunication, Interpersonal Skills</p>
            </div>
        </div>
    </div>
  );
}

export default Home;