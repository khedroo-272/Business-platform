import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Toyota from '../images/Toyota.png';
import Raya from '../images/Raya.png';
import Total from '../images/Total.jpeg';
import Pharma from '../images/Pharma.jpeg';
import EgyGold from '../images/EgyGold.png';
import Cofat from '../images/Cofat.png';

function Partners () {
    return (
        <>
            <Container className="mx-auto w-100 mt-5">
                <div className="m-2 d-flex jusitify-content-between">
                    <img src={Toyota} alt="partner" className="partner"/>
                    <img src={Raya} alt="partner" className="partner"/>
                    <img src={Total} alt="partner" className="partner"/>
                    <img src={Pharma} alt="partner" className="partner"/>
                    <img src={EgyGold} alt="partner" className="partner"/>
                    <img src={Cofat} alt="partner" className="partner"/>
                </div>
            </Container>
        </>
    )
}

export default Partners;