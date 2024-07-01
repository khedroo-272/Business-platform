import React from "react";
import {Container, Row, Col} from "react-bootstrap";

function Footer () {
    return (
        <>
            <footer>
                <p>© {new Date().getFullYear()} Business Platform. All rights reserved.</p>
            </footer> 
        </>
    )
}

export default Footer;