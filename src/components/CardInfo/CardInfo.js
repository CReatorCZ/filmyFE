import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Form} from "react-final-form";
import InputField from "../Inputs/InputField";
import TextareaField from "../Inputs/TextareaInput";
import "./CardInfo.css"

function CardInfo() {
    const {id} = useParams()
    const [film, setFilm] = useState()
    const urlUpdate = `http://localhost/films/update`
    const navigate = useNavigate();
    const [isDeleting, setIsDeleting] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)


    useEffect(() => {
        const fetchData = () => {             /*-------PROMISE-------*/
            axios.get("http://localhost/film/" + id)
                .then(response => {
                    console.log("----------VYPISUJU")
                    setFilm(response.data.find((item) => item.id === Number(id)))
                })
                .catch(error => {
                    console.error(error);
                });
        };
        fetchData();
    }, [id])


    const deleteFilm = () => {
        let text = `Opravdu chcete odstranit ${film.name.toUpperCase()}?`
        console.log("mažu...")
        if (window.confirm(text) === true) {
            setIsDeleting(true)

            axios.delete("http://localhost/films/delete/" + film.id).then(() => {
                setIsDeleting(false)
                console.log("smazáno")
            })
            if (!isDeleting) {
                navigate("/")
            }
        } else {
            console.log("mazání zrušeno")
        }
    }

    const updateFilm = (event) => {
        console.log("event data: ", event)
        const data = {
            id: film.id,
            ...film,
            ...event
        }

        console.log("data: ", data)
        setIsUpdating(true)

        if (event) {
            axios.put(urlUpdate, data)
                .then(() => {
                    console.log("updatuji..")
                    setIsUpdating(false)
                })
                .catch((error) => {
                    console.error("Error updating film:", error)
                })
            if (!isUpdating) {
                navigate("/")
            }
        }

    }

    const onSubmit = (event) => {
        console.log("odesílám submit")
        console.log("submited data: ", event)

        updateFilm(event)

    }


    return (
        <div>
            {film ? (<Form onSubmit={onSubmit}
                           render={({handleSubmit}) => (
                               <form onSubmit={handleSubmit}>
                                   <InputField name={"name"}
                                               autocomplete={"on"}
                                               label={"Název filmu"}
                                               placeholder={film.name}/>
                                   <InputField name={"genre"}
                                               autocomplete={"on"}
                                               label={"Žánr"}
                                               placeholder={film.genre}/>
                                   <InputField name={"direction"}
                                               autocomplete={"on"}
                                               label={"Režie"}
                                               placeholder={film.direction}/>
                                   <InputField name={"releaseDate"}
                                               autocomplete={"on"}
                                               label={"Datum vydání"}
                                               placeholder={film.releaseDate}/>
                                   <InputField name={"length"}
                                               autocomplete={"on"}
                                               label={"Délka filmu"}
                                               placeholder={film.length}/>
                                   <InputField name={"rating"}
                                               autocomplete={"on"}
                                               label={"Hodnocení"}
                                               placeholder={film.rating}/>
                                   <InputField name={"nationalOrigin"}
                                               autocomplete={"on"}
                                               label={"Země původu"}
                                               placeholder={film.nationalOrigin}/>
                                   <TextareaField name={"description"}
                                                  label={"Popis filmu"}
                                                  placeholder={film.description}/>
                                   <div id={"buttons"}>
                                       <button type={"submit"} id={"submit"}>Uložit Změny</button>
                                       <button type={"button"} id={"delete"} onClick={deleteFilm}>Odstranit film
                                       </button>
                                   </div>

                               </form>
                           )}/>) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default CardInfo
