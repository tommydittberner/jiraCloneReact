import './Form.scss';
import {Form, Formik} from "formik";
import * as Yup from "yup";
import {FormikInput, FormikSelect, FormikTextarea} from "../../util/formControls";
import {ISSUE_TYPES, PRIORITY_LEVEL} from "../../util/contants";
import {formValidation, storyPointValues} from "../../util/formUtil";
import {updateIssue} from "../../api/issueService";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function DetailsForm({openConfirmDialog, updateCallback, issue}) {

    const initialFormValues = {
        id: "RFM-" + issue.id, //todo: project id should not be hardcoded
        title: issue.title,
        description: issue.description,
        issueType: issue.type,
        issuePriority: issue.priority,
        storypoints: issue.storypoints
    }

    const onFormSubmit = async (values) => {
        let updatedValues = {};

        if(issue.title !== values.title){
            updatedValues["title"] = values.title;
        }
        if(issue.description !== values.description){
            updatedValues["description"] = values.description;
        }
        if(issue.type !== values.issueType){
            updatedValues["type"] = values.issueType;
        }
        if(issue.priority !== values.issuePriority){
            updatedValues["priority"] = values.issuePriority;
        }
        if(issue.storypoints !== values.storypoints){
            updatedValues["storypoints"] = values.storypoints;
        }

        let updatedIssue = await updateIssue(issue.id, updatedValues);
        updateCallback(updatedIssue);
        toast('Update successful!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const onDeleteIssue = () => {
        openConfirmDialog();
    }

    return (
        <Formik
            initialValues={initialFormValues}
            validationSchema={Yup.object(formValidation)}
            onSubmit={onFormSubmit}
        >
            {({isValid, touched}) => (
                <Form>
                    <div className="details-form-first-row">
                        <div>
                            <FormikInput
                                label="ID"
                                name="id"
                                type="text"
                                disabled={true}
                            />
                        </div>
                        <FontAwesomeIcon
                            className="issue-delete-btn"
                            icon={faTrash}
                            size={'lg'}
                            onClick={onDeleteIssue}
                        />
                    </div>
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
                    <button
                        type="submit"
                        disabled={!isValid || (Object.keys(touched).length === 0 && touched.constructor === Object)}>
                        Update Issue
                    </button>
                    <ToastContainer/>
                </Form>
            )}
        </Formik>
    );
}