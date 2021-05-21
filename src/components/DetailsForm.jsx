import {Form, Formik} from "formik";
import * as Yup from "yup";
import {FormikInput, FormikSelect, FormikTextarea} from "../util/formControls";
import {ISSUE_TYPES, PRIORITY_LEVEL} from "../util/contants";
import {formValidation, storyPointValues} from "../util/formUtil";

export default function DetailsForm({update, issue}) {
    const initialFormValues = {
        id: "RFM-" + issue.id, //todo: project id should not be hardcoded
        title: issue.title,
        description: issue.description,
        issueType: issue.type,
        issuePriority: issue.priority,
        storypoints: issue.storypoints
    }

    const onFormSubmit = async (values, {resetForm}) => {
        update(values);
        resetForm();
    }

    return (
        <Formik
            initialValues={initialFormValues}
            validationSchema={Yup.object(formValidation)}
            onSubmit={onFormSubmit}
        >
            <Form>
                <FormikInput
                    label="ID"
                    name="id"
                    type="text"
                    disabled={true}
                />
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
                        { Object.values(ISSUE_TYPES).map((type, idx) => (
                            <option value={type} key={idx}>
                                {type.toLowerCase()}
                            </option>
                        ))}
                    </FormikSelect>
                    <FormikSelect label="Priority" name="issuePriority">
                        { Object.values(PRIORITY_LEVEL).map((priority, idx) => (
                            <option value={priority} key={idx}>
                                {priority.toLowerCase()}
                            </option>
                        ))}
                    </FormikSelect>
                    <FormikSelect label="SP" name="storypoints">
                        { storyPointValues.map((sp, idx) => (
                            <option value={sp} key={idx}>{sp}</option>
                        ))}
                    </FormikSelect>
                </div>
                <button type="submit">Update Issue</button>
            </Form>
        </Formik>
    );
}