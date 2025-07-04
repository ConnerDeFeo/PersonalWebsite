import { Routes, Route, useLocation, useNavigate, HashRouter } from 'react-router-dom'; 
import Home from './Home';
import Contact from './Contact';
import { Button, Col, Container, Navbar, Row } from 'reactstrap';
import ProjectPage from './ProjectPage';
import Projects from './data/Projects';

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

const saveTheBees = Projects['Save the bees'];
const nightClubs = Projects['Night clubs'];
const chatRoom = Projects['Chat Room'];
const kaizenHabits = Projects['Kaizen Habits'];


const App = () => {
  return (
    <HashRouter>
      <Navigation/>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/saveTheBees"
          element={
            <ProjectPage
              title={saveTheBees.title}
              type={saveTheBees.type}
              languages={saveTheBees.languages}
              date={saveTheBees.date}
              video={saveTheBees.video}
              description={saveTheBees.description}
            />
          }
        />
        <Route
          path="/nightClubs"
          element={
            <ProjectPage
              title={nightClubs.title}
              type={nightClubs.type}
              languages={nightClubs.languages}
              date={nightClubs.date}
              video={nightClubs.video}
              description={nightClubs.description}
            />
          }
        />
        <Route
          path="/chatRoom"
          element={
            <ProjectPage
              title={chatRoom.title}
              type={chatRoom.type}
              languages={chatRoom.languages}
              date={chatRoom.date}
              video={chatRoom.video}
              description={chatRoom.description}
            />
          }
        />
        <Route
          path="/kaizenHabits"
          element={
            <ProjectPage
              title={kaizenHabits.title}
              type={kaizenHabits.type}
              languages={kaizenHabits.languages}
              date={kaizenHabits.date}
              video={kaizenHabits.video}
              description={kaizenHabits.description}
              link={kaizenHabits.link}
              linkTitle={kaizenHabits.linkTitle}
            />
          }
        />
      </Routes>
      <Container className="mw-100 pTop">
        <Row className="text-center">
          <Col xs={12} md={4}><p>@2025 Conner DeFeo</p></Col>
          <Col>
            <a
              href='https://linkedin.com/in/conner-jack-defeo'
              target='_Blank'
              rel='noreferrer'
              className='text-light text-decoration-none'
            >
              <p className="linkedin d-inline-block">Linkedin</p>
            </a>
          </Col>
          <Col>
            <p
              onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
              className='backToTop d-inline-block'
            >
              BACK TO TOP
            </p>
          </Col>
        </Row>
      </Container>
    </HashRouter>
  );
};

export default App;