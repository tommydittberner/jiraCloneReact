import * as Yup from "yup";
import {ISSUE_TYPES, PRIORITY_LEVEL} from "./contants";

export const storyPointValues = [1, 2, 3, 5, 8, 13];
export const formValidation = {
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