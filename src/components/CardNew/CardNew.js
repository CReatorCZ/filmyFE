import {Form} from "react-final-form";
import InputField from "../Inputs/InputField";
import TextareaField from "../Inputs/TextareaInput";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function CardNew() {
    const urlPOST = `http://localhost/films/add`
    const navigate = useNavigate()

    function onSubmit(event) {
        console.log("----", event)
        if (!event.name || !event.genre || !event.direction || isNaN(event.releaseDate) ||
            isNaN(event.length) || isNaN(event.rating) || !event.nationalOrigin || !event.description) {
            alert("Nevyplnili jste správně všechna pole!")
        } else {
            const data = {
                ...event
            }
            console.log("přidávám film: ", data)
            axios.post(urlPOST, event)
                .then(() => {
                    console.log("vytvářím..")
                })
                .catch((error) => {
                    console.error("Error creating film:", error)
                }).then(() => {
                navigate("/")
            })
        }
    }


    return (
        <div>
            <Form onSubmit={onSubmit}
                  validate={values => {
                      console.log("--values: ", values)
                      const errors = {}

                      if (!values.name) {
                          errors.name = "chybi jmeno"
                      }
                      if (!values.genre) {
                          errors.genre = "chybi jmeno"
                      }
                      if (!values.direction) {
                          errors.direction = "chybi jmeno"
                      }
                      if (!values.releaseDate) {
                          errors.releaseDate = "chybi jmeno"
                      }
                      if (!values.length) {
                          errors.length = "chybi jmeno"
                      }
                      if (!values.rating) {
                          errors.rating = "chybi jmeno"
                      }
                      if (!values.nationalOrigin) {
                          errors.nationalOrigin = "chybi jmeno"
                      }
                      if (!values.name) {
                          errors.name = "chybi jmeno"
                      }


                      return errors

                  }}
                  render={({handleSubmit, values}) => (
                      <form onSubmit={handleSubmit}>
                          <InputField name={"name"}
                                      label={"Název filmu"}
                                      placeholder={"Vložte název filmu"}/>
                          <InputField name={"genre"}
                                      label={"Žánr"}
                                      placeholder={"Vložte žánr filmu"}/>
                          <InputField name={"direction"}
                                      label={"Režie"}
                                      placeholder={"Vložte režiséra filmu"}/>
                          <InputField name={"releaseDate"}
                                      label={"Datum vydání"}
                                      placeholder={"Vložte datum vydání filmu"}/>
                          <InputField name={"length"}
                                      label={"Délka filmu"}
                                      placeholder={"Vložte délku filmu"}/>
                          <InputField name={"rating"}
                                      label={"Hodnocení"}
                                      placeholder={"Vložte hodnocení filmu"}/>
                          <InputField name={"nationalOrigin"}
                                      label={"Země původu"}
                                      placeholder={"Vložte zemi původu filmu"}/>
                          <TextareaField name={"description"}
                                         label={"Popis filmu"}
                                         placeholder={"Vložte popis filmu"}/>
                          <div id={"buttons"}>
                              <button type={"submit"} id={"submit"}>Přidat film</button>
                          </div>
                      </form>
                  )}/>
        </div>
    )
}

export default CardNew