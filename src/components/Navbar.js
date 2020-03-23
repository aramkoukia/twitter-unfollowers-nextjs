import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function AppNavbar({ user }) {
  return (
    <Navbar bg="light" expand="lg" style={{ marginBottom: '25px' }}>
      <Container>
        <Navbar.Brand>
          <Link href="/">
            Twitter Unfollowers
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {user && (
              <>
                <Link href="/un-followers">
                  Unfollowers
                </Link>
                <Link href="/profile">
                  Profile
                </Link>
                <Link href="/logout">
                  Log Out
                </Link>
              </>
            )}
            {!user && (
              <Link href="/login">
                Log In
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
