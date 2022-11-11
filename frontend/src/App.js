import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProducScreen from './screens/ProductScreen';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/esm/Badge';
import { useContext } from 'react';
import { Store } from './Store';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <nav>
          <header className="App-header">
            <NavBar bg="dark" variant="dark">
              <Container>
                <LinkContainer to="/">
                  <NavBar.Brand>Laptopshop</NavBar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                  <Link to="/cart" className="Nav-link">
                    Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.length}
                      </Badge>
                    )}
                  </Link>
                </Nav>
              </Container>
            </NavBar>
          </header>
        </nav>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:slug" element={<ProducScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All right ..</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
