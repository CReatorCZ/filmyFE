import './App.css';
import TopMenu from "./components/TopMenu/TopMenu";
import MainContent from "./components/MainContent/MainContent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CardInfo from "./components/CardInfo/CardInfo";
import CardNew from "./components/CardNew/CardNew";
import {useState} from "react";


function App() {
    const [searchedWord, setSearchedWord] = useState("")

    function changeSearchedWord(inputValue) {
        setSearchedWord(inputValue)
    }

    console.log("-------search: ", searchedWord)

    return (
        <BrowserRouter>
            <TopMenu changeSearchedWord={changeSearchedWord}/>


            <Routes>
                <Route exact path={"/"} element={<MainContent searchedWord={searchedWord}/>}/>
                <Route path={"/film/:id"} element={<CardInfo/>}/>
                <Route path={"/film/add"} element={<CardNew/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
