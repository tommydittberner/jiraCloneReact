import './App.scss'
import Board from "./components/board/Board";
import Sidenav from "./components/Sidenav";
import MenuBar from "./components/MenuBar";
import {useEffect, useState} from "react";
import CreateDialog from "./components/createDialog/CreateDialog";
import {fetchIssues} from "./api/issueService";

function App() {
    const [createDialogOpen, setCreateDialogOpen] = useState(false);
    const [issues, setIssues] = useState([]);

    const openCreateDialog = () => setCreateDialogOpen(true);
    const closeCreateDialog = () => setCreateDialogOpen(false);
    const onSubmit = () => {
        setCreateDialogOpen(false);
        //not optimal. With redux we could just insert the new issue into the store
        //instead of fetching everything again.
        fetchIssues().then(response => {
            if (response) {
                setIssues(response);
            }
        });
    }

    //get issues once initially (and on reload)
    useEffect(() => {
        fetchIssues().then(response => {
            if (response) {
                setIssues(response);
            }
        });
    }, []);

    return (
        <>
            <MenuBar openCreateDialog={openCreateDialog}/>
            <Sidenav openCreateDialog={openCreateDialog}/>
            <div className="main">
                <CreateDialog open={createDialogOpen} closeDialog={closeCreateDialog} submit={onSubmit} />
                <Board issues={issues} />
            </div>
        </>

    );
}

export default App;
