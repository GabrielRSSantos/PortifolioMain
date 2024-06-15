
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { Button, FooterComponent } from "./styles";

export default function Footer() {

    return (
        <FooterComponent>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '20vh' }}>

                <a >
                    <Button inputColor="green">
                        <IoLogoWhatsapp size={50} color="white" />
                    </Button>
                </a>

                <a>
                    <Button inputColor="red">
                        <BiLogoGmail size={50} color="white" />
                    </Button>
                </a>

                <a target="_blank" href="https://linkedin.com/in/gabriel-santos-90a16275">
                    <Button inputColor="blue">
                        <FaLinkedin size={50} color="white"/>
                    </Button>
                </a>

            </div>
            <div style={{ paddingTop: '2rem' }}>
                <p>© 2024 - All rights reserved - Created by Gabriel</p>
            </div>
        </FooterComponent>
    )
}