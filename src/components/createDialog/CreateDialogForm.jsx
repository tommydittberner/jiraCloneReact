import './CreateDialogForm.scss';
import {Form, Formik} from "formik";
import {FormikInput, FormikSelect, FormikTextarea} from "../../util/formControls";
import {ISSUE_TYPES, PRIORITY_LEVEL} from "../../util/contants";
import * as Yup from "yup";
import {addNewIssue} from "../../api/issueService";

export default function CreateDialogForm({submit}) {

    const storyPointValues = [1, 2, 3, 5, 8, 13];
    const initialFormValues = {
        title: "",
        description: "",
        issueType: ISSUE_TYPES.STORY,
        issuePriority: PRIORITY_LEVEL.NORMAL,
        storypoints: 1
    };
    const formValidation = {
        title: Yup.string()
            .max(70, "Must be 70 characters or less")
            .required("Required"),
        description: Yup.string()
            .min(12, "Must be at least 12 characters")
            .required("Required"),
        issueType: Yup.string()
            .oneOf(
                [
                    ISSUE_TYPES.STORY,
                    ISSUE_TYPES.TASK,
                    ISSUE_TYPES.BUG,
                    ISSUE_TYPES.IMPROVEMENT
                ]
            )
            .required("Required"),
        issuePriority: Yup.string()
            .oneOf(
                [
                    PRIORITY_LEVEL.TRIVIAL,
                    PRIORITY_LEVEL.LOW,
                    PRIORITY_LEVEL.NORMAL,
                    PRIORITY_LEVEL.HIGH,
                    PRIORITY_LEVEL.BLOCKER
                ]
            )
            .required("Required"),
        storypoints: Yup.number()
            .oneOf([1, 2, 3, 5, 8, 13])
            .required("Required"),
    };

    const onFormSubmit = async (values, { resetForm }) => {
        await addNewIssue(values);
        submit();
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
                        { Object.values(ISSUE_TYPES).map(type => (
                            <option value={type}>
                                {type.toLowerCase()}
                            </option>
                        ))}
                    </FormikSelect>
                    <FormikSelect label="Priority" name="issuePriority">
                        { Object.values(PRIORITY_LEVEL).map(priority => (
                            <option value={priority}>
                                {priority.toLowerCase()}
                            </option>
                        ))}
                    </FormikSelect>
                    <FormikSelect label="SP" name="storypoints">
                        { storyPointValues.map(sp => (
                            <option value={sp}>{sp}</option>
                        ))}
                    </FormikSelect>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}