import StatusColumn from "./StatusColumn";
import {STATUS_TYPES} from "../../util/contants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import {useState, useEffect} from 'react';
import {DragDropContext} from "react-beautiful-dnd";
import {fetchIssues} from "../../api/issueService";

const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const {source, destination} = result;

    //items placed on different column than before
    //since they get sorted by id reordering in the same column is deactivated
    if (source.droppableId !== destination.droppableId) {
        let sourceId = parseInt(source.droppableId);
        let destId = parseInt(destination.droppableId);

        // only go right one column at a time
        // going left means reopening the issue so it is put in column 1 again
        destId = (destId > sourceId) ? sourceId + 1 : 1;

        const sourceColumn = columns[sourceId];
        const destColumn = columns[destId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.push(removed);
        destItems.sort((a, b) => a.id - b.id)

        setColumns({
            ...columns,
            [sourceId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destId]: {
                ...destColumn,
                items: destItems
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

export default function ScrumBoard() {
    const [columns, setColumns] = useState({});
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        fetchIssues().then(response => {
            if (response) {
                setIssues(response);
            }
        });
    }, []);

    useEffect(() => {
        setColumns(insertIssuesIntoColumns(issues));
    }, [issues]);

    return (
        <>
            <div className="board-header">
                <h1>Board</h1>
                <button className="release-btn">release</button>
                <FontAwesomeIcon className="board-header-settings" icon={faEllipsisH}/>
            </div>

            <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
                <div className="scrum-board">
                    {Object.entries(columns).map(([columnId, column], index) => {
                        return (
                            <StatusColumn key={columnId} column={column} columnId={columnId}/>
                        );
                    })}
                </div>
            </DragDropContext>
        </>
    );
}