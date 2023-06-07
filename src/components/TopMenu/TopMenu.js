import "./TopMenu.css";
import {Link} from "react-router-dom";

function TopMenu({changeSearchedWord}) {

    const handleInputChange = (event) => {
        const inputValue = event.target.value
        changeSearchedWord(inputValue)
        console.log("--slovo: ", event.target.value)
    }

    return (
        <nav className={"TopNav"}>
            <Link to={"/"}>Filmy</Link>
            <Link to={"/film/add"}>Přidat film</Link>
            <input id={"searchBar"} placeholder={"Vyhledat film"} onChange={handleInputChange}/>
        </nav>
    )
}

export default TopMenu