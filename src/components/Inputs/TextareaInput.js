import {Field} from "react-final-form";
import React from "react";

const TextareaField = ({name, label, placeholder, style}) => {

    return (
        <Field name={name}>
            {({input, meta}) => (
                <div className={"field"}>
                    <label htmlFor={name}>{label}</label>
                    <textarea rows={4}
                              cols={50}
                              {...input}
                              id={name}
                              placeholder={placeholder}
                              style={style}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
            )}
        </Field>
    )
}
export default TextareaField;