import React from "react";
import Whatsapp from '../images/whatsapp.svg'
import MiniWhatsapp from '../images/MiniWhatsapp.svg'

function WhatsappChat () {
    return (
        <>
            <a aria-label="Chat on WhatsApp"  href="https://wa.me/+201009297719" className="w-app-background">
                <img alt="Chat on WhatsApp" src={Whatsapp} className='w-app d-none d-md-block' />
                <img alt="Chat on WhatsApp" src={MiniWhatsapp} className='mini-w-app d-md-none' />
            </a>
        </>
    )
}

export default WhatsappChat;