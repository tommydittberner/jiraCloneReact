import './Board.scss';
import StatusColumn from "./StatusColumn";
import {STATUS_TYPES} from "../../util/contants";
import {useState, useEffect} from 'react';
import {DragDropContext} from "react-beautiful-dnd";
import BoardHeader from "./BoardHeader";
import {updateBoard} from "../../api/issueService";

const onDragEnd = async (result, columns, setColumns) => {
    if (!result.destination) return;
    const {source, destination} = result;

    //items dropped in different column
    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        let [movedIssue] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, movedIssue);

        let updatedColumns = await updateBoard(source, destination);

        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: updatedColumns[0]
            },
            [destination.droppableId]: {
                ...destColumn,
                items: updatedColumns[1]
            }
        });
        // same column (droppableId is the same in source and destination)
    } else {
        const column = columns[destination.droppableId]
        const items = [...column.items];
        let [movedIssue] = items.splice(source.index, 1);
        items.splice(destination.index, 0, movedIssue);

        //todo: update board when moved in same column, too
        // await updateBoard(source, destination);

        setColumns({
            ...columns,
            [destination.droppableId]: {
                ...column,
                items: items
            }
        });
    }
};

const insertIssuesIntoColumns = (issues) => {
    return {
        "1": {
            name: STATUS_TYPES.OPEN,
            items: [...issues.filter((i) => i.status === STATUS_TYPES.OPEN)]
        },
        "2": {
            name: STATUS_TYPES.IN_PROGRESS,
            items: [...issues.filter((i) => i.status === STATUS_TYPES.IN_PROGRESS)]
        },
        "3": {
            name: STATUS_TYPES.PEER_REVIEW,
            items: [...issues.filter((i) => i.status === STATUS_TYPES.PEER_REVIEW)]
        },
        "4": {
            name: STATUS_TYPES.DONE,
            items: [...issues.filter((i) => i.status === STATUS_TYPES.DONE)]
        }
    }
}

export default function Board({issues}) {
    const [columns, setColumns] = useState(insertIssuesIntoColumns(issues));

    useEffect(() => {
        setColumns(insertIssuesIntoColumns(issues));
    }, [issues]);

    return (
        <>
            <BoardHeader issues={issues}/>
            <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
                <div className="board">
                    {Object.entries(columns)
                        .map(([columnId, column], idx) => (
                            <StatusColumn key={idx} column={column} columnId={columnId}/>
                        ))
                    }
                </div>
            </DragDropContext>
        </>
    );
}