import React from "react";
import Whatsapp from '../images/whatsapp.svg'

function WhatsappChat () {
    return (
        <>
            <a aria-label="Chat on WhatsApp"  href="https://wa.me/+201009297719" className="w-app-background">
                <img alt="Chat on WhatsApp" src={Whatsapp} className='w-app' />
            </a>
        </>
    )
}

export default WhatsappChat;