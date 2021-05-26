import Issue from "./Issue";
import {Draggable, Droppable} from "react-beautiful-dnd";
import StatusColumnHeader from "./StatusColumnHeader";
import {DroppableContainer, StyledStatusColumn} from "../../styles/styles";

export default function StatusColumn({column, columnId}) {
    return (
        <StyledStatusColumn>
            <StatusColumnHeader column={column}/>
            <Droppable droppableId={columnId} key={columnId}>
                {(provided) => {
                    return (
                        <DroppableContainer
                            {...provided.droppableProps}
                            ref={provided.innerRef}
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
                        </DroppableContainer>
                    );
                }}
            </Droppable>
        </StyledStatusColumn>
    );
}