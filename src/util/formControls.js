import {useField} from "formik";
import {ErrorLabel, FormInput, FormLabel, FormSelect, FormTextfield} from "../styles/styles";

export const FormikInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
            <FormInput id={props.id || props.name} {...field} {...props} />
            {meta.touched && meta.error ? (
                <ErrorLabel
                    name={props.id || props.name}
                    data-testid="input-error"
                >{meta.error}</ErrorLabel>
            ) : null}
        </>
    );
};


export const FormikTextarea = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
            <FormTextfield id={props.id || props.name} {...field} {...props} />
            {meta.touched && meta.error ? (
                <ErrorLabel>{meta.error}</ErrorLabel>
            ) : null}
        </>
    );
};

export const FormikSelect = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        //this has to be a div for use with "display: flex;"
        <div className="select-grouping">
            <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
            <FormSelect id={props.id || props.name} {...field} {...props} />
            {meta.touched && meta.error ? (
                <ErrorLabel>{meta.error}</ErrorLabel>
            ) : null}
        </div>
    );
};