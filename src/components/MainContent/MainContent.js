import "./MainContent.css";
import SingleCard from "../SingleCard/SingleCard";
import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import ReactPaginate from "react-paginate";

function MainContent({changeSearchedWord}) {
    console.log("searchedWord", changeSearchedWord)
    const limit = 5;
    const [data, setData] = useState()
    const [totalCount, setTotalCount] = useState(0)
    const pageCount = data ? Math.ceil(totalCount / 5) : 0
    const [currentPage, setCurrentPage] = useState(0)
    const offset = currentPage * limit;
    const url = `http://localhost/films/?limit=${limit}&offset=${offset}&search=${changeSearchedWord}`


    useEffect(() => {
        console.log("loading data")
        const fetchData = () => {
            console.log("url for GET: ", url)
            axios.get(url)
                .then(response => {
                    console.log("--RESPONSE: ", response.data)
                    setTotalCount(response.data.totalCount)
                    setData(response.data.films)
                })
                .catch(error => {
                    console.error(error);
                });
        };
        fetchData();
        console.log("loaded data")
    }, [url])

    console.log("data from Api:", data)

    const handlePageChange = (page) => {
        console.log("PAGE: ", page.selected)
        setCurrentPage(page.selected)
    }

    return (
        <div className={"contentDiv"}>
            <div className={"cards"}>

                {data ? (data.map((film) => (
                        <SingleCard film={film} key={film.id}/>
                    ))
                ) : (
                    <Loading/>
                )}

            </div>
            {data && <div className={"paginator"}>
                <ReactPaginate
                    previousLabel={"< "}
                    nextLabel={" >"}
                    breakLabel={"..."}
                    breakClassName={"break"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination"}
                    activeClassName={"active"}

                />
            </div>}
            <div className={"block"}>
                oooo
            </div>
        </div>
    )
}
//sss
export default MainContent;