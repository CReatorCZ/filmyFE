import './App.css';
import TopMenu from "./components/TopMenu/TopMenu";
import MainContent from "./components/MainContent/MainContent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CardInfo from "./components/CardInfo/CardInfo";
import CardNew from "./components/CardNew/CardNew";
import {useState} from "react";


function App() {
    const [searchedWord, setSearchedWord] = useState("")
    const [searchedActor, setSearchedActor] = useState("")

    function changeSearchedWord(inputValue) {
        setSearchedWord(inputValue)
    }

    function handleAdditionalSearch(actorsName) {
        setSearchedActor(actorsName)
        console.log("Hledaný herec: ", searchedActor)
    }

    console.log("-------search: ", searchedWord)

    return (
        <BrowserRouter>
            <TopMenu changeSearchedWord={changeSearchedWord} handleAdditionalSearch={handleAdditionalSearch}/>


            <Routes>
                <Route exact path={"/"} element={<MainContent
                    searchedWord={searchedWord}
                    searchedActor={searchedActor}
                />}/>
                <Route path={"/film/:id"} element={<CardInfo/>}/>
                <Route path={"/film/add"} element={<CardNew/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
