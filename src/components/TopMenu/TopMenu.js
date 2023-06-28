import "./TopMenu.css";
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
import {Form, Field} from "react-final-form";

function TopMenu({changeSearchedWord, handleAdditionalSearch}) {
    const [showAdditionalSearchBar, setShowAdditionalSearchBar] = useState(true)

    // const handleInputChange = (event) => {
    //     const inputValue = event.target.value
    //     changeSearchedWord(inputValue)
    //     console.log("--slovo: ", inputValue)
    // }

    // const handleActorsChange = (event) => {
    //     handleAdditionalSearch(event.target.value)
    //     console.log("searched actor: ", event.target.value)
    // }
    const onSubmit = (values) => {
        console.log("-*-*-*-*-searchedWord: ", values)
        console.log("-*-*-*-*-searchedWord: ", values.searchedWord)
        changeSearchedWord(values.searchedWord)

    }


    return (
        <>
            <div className={"TopNav"}>
                <div className={"logoBar"}>
                    <div id={"LOGO"}><Link to={"/"}>Filmy.com</Link></div>

                    <Form onSubmit={onSubmit} render={({handleSubmit, values}) => (
                        <form onSubmit={handleSubmit}>

                            <Field name={"searchedWord"}>
                                {({input, meta}) => (
                                    <div className={"searchContainer"}>
                                        <input {...input} id={"searchBar"} placeholder={"Vyhledat film"}/>
                                        <button type={"submit"} id={"searchButton"}>
                                            <SearchIcon/>
                                        </button>
                                    </div>
                                )}
                            </Field>

                        </form>)}/>


                    {/*/!*      Fungující starej live search*!/*/}
                    {/*<div className={"searchContainer"}>*/}
                    {/*    <input id={"searchBar"} placeholder={"Vyhledat film"} onChange={handleInputChange}/>*/}
                    {/*    <button id={"searchButton"}>*/}
                    {/*        <SearchIcon/>*/}
                    {/*    </button>*/}
                    {/*</div>*/}

                    <div><Link to={"/filter"}>rozšířené vyhledávání</Link></div>
                </div>
                <nav>
                    <Link to={"/"}>Filmy</Link>
                    <Link to={"/film/add"}>Přidat film</Link>

                </nav>
            </div>


            {/*<input placeholder={"Jméno herce"} onChange={handleActorsChange}/>*/}


        </>
    )
}

export default TopMenu