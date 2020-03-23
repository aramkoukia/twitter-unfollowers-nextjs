import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';

export default function AppNavbar({ user }) {
  return (
    <Navbar bg="light" expand="lg" style={{ marginBottom: '25px' }}>
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <Button>
              Twitter Unfollowers
            </Button>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {user && (
              <>
                <Link href="/un-followers">
                  <Button>
                    Unfollowers
                  </Button>
                </Link>
                <Link href="/profile">
                  <Button>
                    Profile
                  </Button>
                </Link>
                <Link href="/logout">
                  <Button>
                    Log Out
                  </Button>
                </Link>
              </>
            )}
            {!user && (
              <Link href="/login">
                <Button>
                  Log In
                </Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
