import "./TopMenu.css";
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";

function TopMenu({changeSearchedWord, handleAdditionalSearch}) {
    const [showAdditionalSearchBar, setShowAdditionalSearchBar] = useState(true)

    const handleInputChange = (event) => {
        const inputValue = event.target.value
        changeSearchedWord(inputValue)
        console.log("--slovo: ", event.target.value)
    }

    const handleActorsChange = (event) => {
        handleAdditionalSearch(event.target.value)
        console.log("searched actor: ", event.target.value)
    }

    const changeAdditionalSearchBar = () => {
        setShowAdditionalSearchBar(!showAdditionalSearchBar)
        console.log("-------ZMENA", showAdditionalSearchBar)
    }


    return (
        <>
            <nav className={"TopNav"}>
                <Link to={"/"}>Filmy</Link>
                <Link to={"/film/add"}>Přidat film</Link>
                <input id={"searchBar"} placeholder={"Vyhledat film"} onChange={handleInputChange}/>
            </nav>
            {showAdditionalSearchBar &&
                <div className={"additionalSearchBar"}>
                    <label>Vyhledat herce</label><input placeholder={"Jméno herce"} onChange={handleActorsChange}/>
                </div>}
            <div className={"halfCircle"}>
                {showAdditionalSearchBar
                    ? <span onClick={changeAdditionalSearchBar}>
                        <CloseIcon id={"addSearchIcon"}
                                   sx={{color: "white", fontSize: 30}}/></span>
                    : <span onClick={changeAdditionalSearchBar}>
                        <SearchIcon id={"addSearchIcon"}
                                    sx={{color: "white", fontSize: 30}}/></span>}
            </div>
        </>
    )
}

export default TopMenu