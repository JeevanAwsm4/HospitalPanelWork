import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/screens/login'
import Signup from './components/screens/signup'
import NotAvailable from './components/screens/NotAvailable';
import Home from './components/screens/Home';
import styled from "styled-components";
import PanelNav from './components/includes/PanelNav'
import Request from './components/screens/Request';
import Header from './components/includes/Header';
import Report from './components/screens/Report';
import Contact from './components/screens/Contact';
import Subscribe from './components/screens/Subscribe'
import LiveChart from './components/screens/composition';
import Subscription from './components/screens/subscription';

function App() {
  return (
  <>
    <Router>
      <Routes>
          <Route path='*' Component={Login} />
          <Route path='signup' Component={Signup} />
          <Route path='panel' Component={NotAvailable} />
          <Route path='subscribe' element={<Subscribe />} />
          <Route
                path='/hospital-panel/*'
                element={
                  <Container>
                  <Routes>
                      <Route path='*' element={<PanelNav />} />
                  </Routes>
                  <PanelRouteContainer>
                      <Routes>
                        <Route path='*' element={<Header />} />
                      </Routes>
                      <Routes>
                          <Route path='home' element={<Home />} />
                      </Routes>
                      <Routes>
                          <Route path='request' element={<Request />} />
                      </Routes>
                      <Routes>
                          <Route path='report' element={<Report />} />
                      </Routes>
                      <Routes>
                          <Route path='contact' element={<Contact />} />
                      </Routes>
                      <Routes>
                          <Route path='city-composition' element={<LiveChart />} />
                      </Routes>
                      <Routes>
                          <Route path='subscription' element={<Subscription />} />
                      </Routes>
                  </PanelRouteContainer>
              </Container>
                        }
            />
      </Routes>
    </Router>
  </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
`
const RouteContainer = styled.div`
  padding: 55px 30px 0px;
  width: 75%;
  padding-left: 10%;
`
const PanelRouteContainer = styled.div`
  padding: 0px;
  width: 100%;
  padding-left: 18%;
`