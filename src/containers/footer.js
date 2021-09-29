import React from 'react'
import { Footer } from '../components'
import * as ROUTES from '../constants/routes'
export  function FooterContainer() {
    return (
        <Footer>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Title>Some More</Footer.Title>
                    {/* <Footer.Link href={ROUTES.FAQS}>FAQs</Footer.Link> */}
                    <Footer.Link href="#">About Me</Footer.Link>
                    <Footer.Link href="#">Gallery</Footer.Link>
                    <Footer.Link href="#">Events</Footer.Link>
                    <Footer.Link href="#">Copyrights</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>Connect with me!</Footer.Title>
                    <Footer.Link href="https://www.youtube.com/channel/UCp2e43qPr3gsxcEIR1ZYGGA" target="_blank" rel="noopener noreferrer" >Youtube</Footer.Link>
                    <Footer.Link href="https://www.instagram.com/destynidoes/" target="_blank" rel="noopener noreferrer" >Instagram</Footer.Link>
                    <Footer.Link href="https://www.tiktok.com/@destynit" target="_blank" rel="noopener noreferrer" >TikTok</Footer.Link>
                </Footer.Column>

                <Footer.Text>Destyni Does United States</Footer.Text>
            </Footer.Row>            
        </Footer>
    )
}
