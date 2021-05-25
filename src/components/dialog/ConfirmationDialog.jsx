import './Dialog.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";

export default function ConfirmationDialog({issueId, open, closeDialog, confirmDeletion}) {
    return (
        <div className={open ? "overlay" : "dialog-hidden"}>
          <div className="dialog-wrapper">
              <div className={open ? `dialog confirmation-dialog` : "dialog-hidden"}>
                  <div className="dialog-header-row">
                      <h1 className="dialog-title">Delete issue RFM-{issueId}?</h1>
                      <FontAwesomeIcon
                          className="dialog-close-btn"
                          onClick={closeDialog}
                          icon={faWindowClose}
                          size="2x"
                      />
                  </div>
                  <p>This issue will be forever deleted and there is no chance to get it back later on.</p>
                  <div className="dialog-actions">
                      <button onClick={closeDialog}>
                          Cancel
                      </button>
                      <button onClick={confirmDeletion}>
                          Yes, I'm sure
                      </button>
                  </div>
              </div>
          </div>
      </div>
    );
}