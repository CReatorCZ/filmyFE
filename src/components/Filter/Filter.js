import "./Filter.css"
import {Form} from "react-final-form";
import InputField from "../Inputs/InputField";

function Filter() {

    function onSubmit() {

    }

    return (
        <div id={"Filter"}>
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
                  render={({handleSubmit}) => (
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

                          <div id={"buttons"}>
                              <button type={"submit"} id={"submit"}>Hledat</button>
                          </div>
                      </form>
                  )}/>
        </div>
    )
}

export default Filter;