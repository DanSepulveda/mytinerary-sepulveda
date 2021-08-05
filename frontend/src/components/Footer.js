const Footer = () =>{
    return (
        <footer className="footer" 
            style={{
                backgroundImage: "url('/assets/japan.jpg')"
            }}>
                <div className="footerSections">
                    <div className="footerSection">Section 1</div>
                    <div className="footerSection">Section 2</div>
                    <div className="footerSection">Section 3</div>
                </div>
                <div className="afterFooter">
                    <p>Made by <span>Daniel Sepúlveda</span> | &copy; All Rights Reserved</p>
                </div>
        </footer>
    )
}

export default Footer