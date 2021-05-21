import './StatusColumn.scss';
import Issue from "./Issue";
import {Draggable, Droppable} from "react-beautiful-dnd";
import StatusColumnHeader from "./StatusColumnHeader";

export default function StatusColumn({column, columnId}) {
    return (
        <div className="status-column">
            <StatusColumnHeader column={column}/>
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
                                            return (
                                                <div
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <Issue issue={issue}/>
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