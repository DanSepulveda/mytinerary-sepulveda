const Footer = () =>{
    return (
        <footer>
                <div className="footerSections">
                    <div className="footerSection first">
                        <h4>Contact<br />Information</h4>
                        <p>Please feel free to contact us through ant of our social media.</p>
                        <div className="social">
                            <a href='https://www.whatsapp.com' target='_blank'><img className="socialIcon" src='assets/whatsapp.png' alt='Whatsapp Icon' /></a>
                            <a href='https://www.facebook.com' target='_blank'><img className="socialIcon" src='assets/facebook.png' alt='Facebook Icon' /></a>
                            <a href='https://www.twitter.com' target='_blank'><img className="socialIcon" src='assets/twitter.png' alt='Twitter Icon' /></a>
                            <a href='https://www.instagram.com' target='_blank'><img className="socialIcon" src='assets/instagram.png' alt='Instagram Icon' /></a>
                        </div>
                    </div>
                    <div className="footerSection second">
                        <h4>Popular<br />Mytineraries</h4>
                        <ul>
                            <li>Hiroshima</li>
                            <li>Kyoto</li>
                            <li>Nara</li>
                        </ul>
                    </div>
                    <div className="footerSection third" style={{backgroundImage: "url('/assets/logo.png')"}}>
                    </div>
                </div>
                <div className="afterFooter">
                    <span>Made by Daniel Sepúlveda | &copy; All Rights Reserved</span>
                </div>
        </footer>
    )
}

export default Footer