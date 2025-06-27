import { Routes, Route, useLocation, useNavigate, HashRouter } from 'react-router-dom'; 
import Home from './Home';
import Contact from './Contact';
import { Button, Col, Container, Navbar, Row } from 'reactstrap';
import ProjectPage from './ProjectPage';

function Navigation(){
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <Navbar className='d-flex bg-black navbar'>
      <Button color='light' className="navButton" onClick={() => handleNavigation('/')}>Home</Button>
      <Button color="light" className="navButton" onClick={() => handleNavigation('/contact')}>Contact</Button>
    </Navbar>
  );
};


const App = () => {
  return (
    <HashRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/personalWebsite" element={<ProjectPage title={'PERSONAL WEBSITE'} type={'Personal'} languages={'React, Bootstrap, Reactstrap'} date={'2025'} video={'https://www.youtube.com/embed/eaFgN0M5Luc'} description={'Front end application made using react and bootstrap. Will be integrating full stack features in the future using python, Flask, and PostgreSQL.'}/>} />
        <Route path="/saveTheBees" element={<ProjectPage title={'SAVE THE BEES'} type={'Inro to Software Engineering'} languages={'Angular, Java, SpringBoot'} date={'2024'} video={'https://www.youtube.com/embed/E_Qqq0QTd1Q'} description={'Full stack application made using angular, java, and spring boot. Users can add needs they want to donate money towards to their funding basket, wish-list, or subscription list. Admins can create, delete, and edit needs available to users. This application was made in a team of 5, with my focus being primarily on the back-end JSON manipulation and rest controllers. On top of this I developed both front and backend for the wish-list.'}/>} />
        <Route path="/nightClubs" element={<ProjectPage title={'NIGHT CLUBS'} type={'Web Engineering'} languages={'React, Bootstrap, Reactstrap, Python, Flask, PostgreSQL'} date={'2024'} video={'https://www.youtube.com/embed/7Grs6ycbbEY'} description={'Full stack application made entirely by me using React, bootstrap, python, flask, and PostgreSQl. Users can add, delete, filter, and edit nightclubs. Various UI functionalities have been implemented to make this application look good on all device sizes.'}/>} />
        <Route path="/chatRoom" element={<ProjectPage title={'CHAT ROOM'} type={'Web Engineering'} languages={'Python, PostgreSQL'} date={'2024'} video={'https://www.youtube.com/embed/lyGGmOv5pfY'} description={'Check out my code relating to SQL database manipulations!'}/>} />
        <Route path="/habitTracker" element={<ProjectPage title={'HABIT TRACKER'} type={'Personal'} languages={'React Ts, ASP.NET, MongoDB, AWS BeanStalk, AWS Amplify, AWS Cloudfront, Nginx, XUnit'} date={'2025'} video={'https://www.youtube.com/embed/SlBoB0DIEW4'} description={'Full stack web application deployed to AWS. Database hosted by mongoDb atlas, server by AWS beanstalk, and front end by AWS amplify. AWS CloudFront is used to allow https request while using restrictive browsers such as safari that restrict cross domain cookies. Cloudfront masks the server and front end behind the same domain. Ideated and designed application using figma and uml diagrams. Secure password hashing and storing over https requests. Session keys are held for persistenet authentication. Users can modify habits and view long term statistics such as their current streak or longest streak, and view how many days they sticked with completing all their habits. Login Using Username: Guest, Password: HabitTracker, in order to test the application yourself! https://d1yh3gb7nsde9n.cloudfront.net is the domain.'}/>} />
      </Routes>
      <Container className="mw-100 pTop">
          <Row className="text-center">
              <Col xs={12} md={4}><p>@2025 Conner DeFeo</p></Col>
              <Col><a href='https://linkedin.com/in/conner-jack-defeo' target='_Blank' rel='noreferrer' className='text-light text-decoration-none'><p className="linkedin d-inline-block">Linkedin</p></a></Col>
              <Col><p onClick={()=>window.scroll({top:0, behavior:'smooth'})} className='backToTop d-inline-block'>BACK TO TOP</p></Col>
          </Row>
      </Container>
    </HashRouter>
  );
};

export default App;