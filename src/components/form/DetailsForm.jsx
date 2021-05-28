import './Form.scss';
import {Form, Formik} from "formik";
import * as Yup from "yup";
import {FormikInput, FormikSelect, FormikTextarea} from "../../util/formControls";
import {ISSUE_TYPES, PRIORITY_LEVEL} from "../../util/contants";
import {formValidation, storyPointValues} from "../../util/formUtil";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ActionIconButton, SubmitButton} from "../../styles/styles";

export default function DetailsForm({issue, onDelete, onSubmit}) {
    const initialFormValues = {
        id: "RFM-" + issue.id, //todo: project abbreviation should not be hardcoded
        title: issue.title,
        description: issue.description,
        issueType: issue.type,
        issuePriority: issue.priority,
        storypoints: issue.storypoints
    }

    return (
        <Formik
            initialValues={initialFormValues}
            validationSchema={Yup.object(formValidation)}
            onSubmit={onSubmit}
        >
            {({isValid, touched}) => (
                <Form>
                    <div>
                        <FormikInput
                            label="ID"
                            name="id"
                            id="id"
                            type="text"
                            disabled={true}
                        />
                    </div>
                    <FormikInput
                        label="Title"
                        name="title"
                        id="title"
                        type="text"
                        placeholder="Add shopping cart page"
                    />
                    <FormikTextarea
                        label="Description"
                        name="description"
                        id="description"
                        type="text"
                        placeholder="Describe your issue"
                    />
                    <div className="form-select-wrapper">
                        <FormikSelect
                            label="Type"
                            name="issueType"
                        >
                            { Object.values(ISSUE_TYPES).map((type, idx) => (
                                <option value={type} key={idx}>
                                    {type.toLowerCase()}
                                </option>
                            ))}
                        </FormikSelect>
                        <FormikSelect
                            label="Priority"
                            name="issuePriority"
                        >
                            { Object.values(PRIORITY_LEVEL).map((priority, idx) => (
                                <option value={priority} key={idx}>
                                    {priority.toLowerCase()}
                                </option>
                            ))}
                        </FormikSelect>
                        <FormikSelect
                            label="SP"
                            name="storypoints"
                        >
                            { storyPointValues.map((sp, idx) => (
                                <option value={sp} key={idx}>{sp}</option>
                            ))}
                        </FormikSelect>
                    </div>
                    <div className="btn-row">
                        <ActionIconButton type="button" title="delete" onClick={onDelete}>
                            <FontAwesomeIcon
                                icon={faTrash}
                                size={'lg'}
                            />
                        </ActionIconButton>
                        <SubmitButton type="submit"
                            disabled={!isValid || (Object.keys(touched).length === 0 && touched.constructor === Object)}
                        >
                            Update Issue
                        </SubmitButton>
                    </div>
                    <ToastContainer/>
                </Form>
            )}
        </Formik>
    );
}