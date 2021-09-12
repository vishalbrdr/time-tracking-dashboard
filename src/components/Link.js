function Link({ name, active, handleLinkClick }) {

    

    return <a className={active ? "active link" : "link"}  onClick={handleLinkClick} href="/">{name}</a>
}

export default Link
