import {Field} from "react-final-form";
import React from "react";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const InputField = ({name, label, placeholder, style, autocomplete}) => {

    return (
        <Field name={name}>
            {({input, meta}) => (
                <div className={"field"}>
                    {label && <label htmlFor={name}>{label}</label>}
                    <input {...input}
                           id={name}
                           type="text"
                           style={style}
                           placeholder={placeholder}
                           autoComplete={autocomplete}
                    />
                    {meta.error && meta.touched &&
                        <span style={{position: "relative", top: "5px"}}><PriorityHighIcon/></span>}


                </div>
            )}
        </Field>
    )
}
export default InputField;