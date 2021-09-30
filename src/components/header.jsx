import {Container, Navbar} from "react-bootstrap";

function Header() {
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="/img/logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        BAUHAUS
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header