import React from 'react'
import { Footer } from '../components'

export  function FooterContainer() {
    return (
        <Footer>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Title>Some More</Footer.Title>
                    <Footer.Link href="#">FAQs</Footer.Link>
                    <Footer.Link href="#">About Me</Footer.Link>
                    <Footer.Link href="#">Gallery</Footer.Link>
                    <Footer.Link href="#">Events</Footer.Link>
                    <Footer.Link href="#">Copyrights</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>Connect with me!</Footer.Title>
                    <Footer.Link href="#">Youtube</Footer.Link>
                    <Footer.Link href="#">Instagram</Footer.Link>
                    <Footer.Link href="#">TikTok</Footer.Link>
                </Footer.Column>

                <Footer.Text>Destyni Does United States</Footer.Text>
            </Footer.Row>            
        </Footer>
    )
}
