import "./SingleCard.css";
import Rating from '@mui/material/Rating';
import {Link} from "react-router-dom";


function SingleCard({film}) {
    /*console.log("editab---------",editable)*/
    // console.log("film id: ", film.id)


    return (
        <div className={"card"} key={film.id}>
            <Link to={`/film/${film.id}`}><h2 className={"card-title"}>{film.name} ({film.id})</h2></Link>
            <h3 className={"card-genre"}>{film.genre}</h3>
            <div style={{textAlign: "center"}}>
                <Rating value={film.rating / 2} precision={0.5}/>
            </div>

            <div>
                <ul className={"card-ul"}>
                    <li><strong>Režie: </strong>{"" + film.direction}</li>
                    <li><strong>Datum vydání: </strong>{"" + film.releaseDate}</li>
                    <li><strong>Délka filmu: </strong>{"" + film.length + " minut"}</li>
                    <li><strong>Země původu: </strong>{"" + film.nationalOrigin}</li>
                </ul>

            </div>
            <p className={"card-desc"}>{film.description}</p>
        </div>
    )
}

export default SingleCard