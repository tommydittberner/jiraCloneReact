import {faBan, faBug} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Issue(props) {
    const {title} = props;

    return(
        <div className="issue-card">
            <div className="issue-title">
                <span>{title}</span>
            </div>
            <div className="info-section">
                <FontAwesomeIcon className="icon-red" icon={faBug} />
                <FontAwesomeIcon className="icon-red" icon={faBan} />
                <span className="storypoints">8</span>
                <span className="issue-id">RFM-101</span>
            </div>
        </div>
    );

}