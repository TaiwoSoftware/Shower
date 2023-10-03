const Footer = () => {
    const currentDate = new Date();
    const fullDate = currentDate.getFullYear();
    return (
        <footer>
            <p>&copy;{fullDate} Akerele Taiwo David</p>
        </footer>
    );
}

export default Footer;
