import './CreateDialogForm.scss';
import {Form, Formik} from "formik";
import {FormikInput, FormikSelect, FormikTextarea} from "../../util/formControls";
import {ISSUE_TYPES, PRIORITY_LEVEL} from "../../util/contants";
import * as Yup from "yup";
import {addNewIssue} from "../../api/issueService";
import {formValidation, storyPointValues} from "../../util/formUtil";

export default function CreateDialogForm({addIssue}) {
    const initialFormValues = {
        title: "",
        description: "",
        issueType: ISSUE_TYPES.STORY,
        issuePriority: PRIORITY_LEVEL.NORMAL,
        storypoints: 1
    };

    const onFormSubmit = async (values, {resetForm}) => {
        addIssue(await addNewIssue(values));
        resetForm();
    }

    return (
        <Formik
            initialValues={initialFormValues}
            validationSchema={Yup.object(formValidation)}
            onSubmit={onFormSubmit}
        >
            {({isValid, touched}) => (
                <Form>
                    <FormikInput
                        label="Title"
                        name="title"
                        type="text"
                        placeholder="Add shopping cart page"
                    />
                    <FormikTextarea
                        label="Description"
                        name="description"
                        type="text"
                        placeholder="Describe your issue"
                    />
                    <div className="form-select-wrapper">
                        <FormikSelect label="Type" name="issueType" className="form-select">
                            {Object.values(ISSUE_TYPES).map((type, idx) => (
                                <option value={type} key={idx}>
                                    {type.toLowerCase()}
                                </option>
                            ))}
                        </FormikSelect>
                        <FormikSelect label="Priority" name="issuePriority">
                            {Object.values(PRIORITY_LEVEL).map((priority, idx) => (
                                <option value={priority} key={idx}>
                                    {priority.toLowerCase()}
                                </option>
                            ))}
                        </FormikSelect>
                        <FormikSelect label="SP" name="storypoints">
                            {storyPointValues.map((sp, idx) => (
                                <option value={sp} key={idx}>{sp}</option>
                            ))}
                        </FormikSelect>
                    </div>
                    <button
                        type="submit"
                        disabled={!isValid || (Object.keys(touched).length === 0 && touched.constructor === Object)}
                    >
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
}