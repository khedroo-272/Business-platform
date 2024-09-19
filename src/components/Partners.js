import React from "react";
import {Container} from "react-bootstrap";
import Toyota from '../images/Toyota.png';
import Raya from '../images/Raya.png';
import Total from '../images/Total.jpeg';
import Pharma from '../images/Pharma.jpeg';
import EgyGold from '../images/EgyGold.png';
import Cofat from '../images/Cofat.png';
import Dohler from '../images/Dohler.webp';
import Reliance from '../images/Reliance.webp';

function Partners () {
    return (
        <>
            <Container className="mx-auto w-100 mt-5">
                <h3 className="text-center .playfair-display-regular">Partners In Success</h3>
                <div className="m-2 d-flex jusitify-content-between flex-wrap">
                    <img src={Toyota} alt="Toyota" className="partner"/>
                    <img src={Raya} alt="Raya" className="partner"/>
                    <img src={Total} alt="Total" className="partner"/>
                    <img src={Pharma} alt="Pharma" className="partner"/>
                    <img src={Cofat} alt="Cofat" className="partner"/>
                    <img src={EgyGold} alt="EgyGold" className="partner"/>
                    <img src={Dohler} alt="Dohler" className="partner"/>
                    <img src={Reliance} alt="Reliance" className="partner"/>
                </div>
            </Container>
        </>
    )
}

export default Partners;