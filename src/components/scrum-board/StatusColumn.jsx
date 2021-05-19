import Issue from "./Issue";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {STATUS_TYPES} from "../../util/contants";
import {Droppable, Draggable} from "react-beautiful-dnd";

export default function StatusColumn(props) {
    const { column, columnId } = props;

    return(
        <div className="development-step">
            <div className="status-header">
                {
                    column.name === STATUS_TYPES.DONE &&
                    <FontAwesomeIcon className="done-icon" icon={faCheckCircle} />
                }
                <span className="status">{column.name}</span>
                <span className="item-count">{column.items.length}</span>
            </div>

            <Droppable droppableId={columnId} key={columnId}>
                {(provided) => {
                    return (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="droppable-container"
                        >
                            {column.items.map((issue, index) => {
                                return (
                                    <Draggable key={issue.id} draggableId={issue.id + ""} index={index}>
                                        {(provided) => {
                                            return(
                                                <div
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <Issue issue={issue} />
                                                </div>
                                            );
                                        }}
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                        </div>
                    );
                }}
            </Droppable>
        </div>
    );
}