import './App.scss'
import Board from "./components/board/Board";
import Sidenav from "./components/Sidenav";
import MenuBar from "./components/MenuBar";
import {useEffect, useState} from "react";
import CreateDialog from "./components/createDialog/CreateDialog";
import {fetchIssues} from "./api/issueService";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import IssueDetails from "./components/issueDetails/IssueDetails";

function App() {
    const [createDialogOpen, setCreateDialogOpen] = useState(false);
    const [issues, setIssues] = useState([]);

    const openCreateDialog = () => setCreateDialogOpen(true);
    const closeCreateDialog = () => setCreateDialogOpen(false);
    const addIssue = (newIssue) => {
        setCreateDialogOpen(false);
        setIssues([...issues, newIssue]);
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
        <BrowserRouter>
            <MenuBar openCreateDialog={openCreateDialog}/>
            <Sidenav openCreateDialog={openCreateDialog}/>
            <div className="main">
                <CreateDialog open={createDialogOpen} closeDialog={closeCreateDialog} addIssue={addIssue} />
                <Switch>
                    <Route exact path="/">
                        {/* conditional for login goes here */}
                        <Redirect to="/board" />
                    </Route>
                    <Route exact path="/issues/:issueId">
                        <IssueDetails />
                    </Route>
                    <Route exact path="/board">
                        <Board issues={issues} />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>

    );
}

export default App;
