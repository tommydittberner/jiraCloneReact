import {ISSUE_TYPES, PRIORITY_LEVEL} from "./contants";
import {
    faAngleDoubleDown,
    faBan,
    faBookmark,
    faBug,
    faCaretSquareUp,
    faCheckSquare,
    faCircle,
    faLongArrowAltDown,
    faLongArrowAltUp
} from "@fortawesome/free-solid-svg-icons";

export const removeUnderscore = (input) => {
    return input.split('_').join(' ');
}

export const getTypeIcon = (type) => {
    switch (type) {
        case ISSUE_TYPES.BUG:
            return faBug;
        case ISSUE_TYPES.TASK:
            return faCheckSquare;
        case ISSUE_TYPES.STORY:
            return faBookmark;
        case ISSUE_TYPES.IMPROVEMENT:
            return faCaretSquareUp;
        default:
            return faCircle;
    }
}


//todo: light and dark theme option
export const getTypeColor = (type) => {
    switch (type) {
        case ISSUE_TYPES.BUG:
            return "red";
        case ISSUE_TYPES.TASK:
            return "blue";
        case ISSUE_TYPES.STORY:
            return "green";
        case ISSUE_TYPES.IMPROVEMENT:
            return "yellow";
        default:
            return "blue";
    }
}

export const getPriorityIcon = (priority) => {
    switch (priority) {
        case PRIORITY_LEVEL.TRIVIAL:
            return faAngleDoubleDown;
        case PRIORITY_LEVEL.LOW:
            return faLongArrowAltDown;
        case PRIORITY_LEVEL.NORMAL:
            return faCircle;
        case PRIORITY_LEVEL.HIGH:
            return faLongArrowAltUp;
        case PRIORITY_LEVEL.BLOCKER:
            return faBan;
        default:
            return faCircle;
    }
}

export const getPriorityColor = (priority) => {
    switch (priority) {
        case PRIORITY_LEVEL.TRIVIAL:
            return "yellow";
        case PRIORITY_LEVEL.LOW:
            return "yellow";
        case PRIORITY_LEVEL.NORMAL:
            return "blue";
        case PRIORITY_LEVEL.HIGH:
            return "red";
        case PRIORITY_LEVEL.BLOCKER:
            return "red";
        default:
            return "blue";
    }
}
