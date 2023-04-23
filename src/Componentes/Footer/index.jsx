import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundImage : "url(./img/Footer.png)"}}>
            <div className="redes">
                <a href="/">
                    <img src="./img/facebook.png" alt="Facebook" />
                </a>
                <a href="/">
                    <img src="./img/twitter.png" alt="Twitter" />
                </a>
                <a href="/">
                    <img src="./img/instagram.png" alt="Instagram" />
                </a>
            </div>
            <img src="/Favicon.png" alt=""/>
            <strong>Desarrollado por Marcos Guzmán </strong>
        </footer>
    )
}

export { Footer }