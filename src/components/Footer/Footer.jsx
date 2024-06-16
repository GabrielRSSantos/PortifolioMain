
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { Button, FooterComponent } from "./styles";

export default function Footer() {

    return (
        <FooterComponent>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                <a style={{padding:'0.5rem'}}>
                    <Button inputcolor="green">
                        <IoLogoWhatsapp size={40} color="white" />
                    </Button>
                </a>

                <a style={{padding:'0.5rem'}}>
                    <Button inputcolor="red">
                        <BiLogoGmail size={40} color="white" />
                    </Button>
                </a>

                <a style={{padding:'0.5rem'}} target="_blank" href="https://linkedin.com/in/gabriel-santos-90a16275">
                    <Button inputcolor="blue">
                        <FaLinkedin size={40} color="white"/>
                    </Button>
                </a>

            </div>
            <div style={{ paddingTop: '2rem' }}>
                <p>© 2024 - All rights reserved - Created by Gabriel</p>
            </div>
        </FooterComponent>
    )
}