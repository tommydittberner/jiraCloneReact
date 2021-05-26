import './App.scss'
import Board from "./components/board/Board";
import Sidenav from "./components/Sidenav";
import MenuBar from "./components/MenuBar";
import {useEffect, useState} from "react";
import CreateDialog from "./components/dialog/CreateDialog";
import {fetchIssues} from "./api/issueService";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import IssueDetails from "./components/issueDetails/IssueDetails";
import {ThemeProvider} from "styled-components";
import useTheme from "./hooks/useTheme";
import {lightTheme, darkTheme} from "./styles/theme";
import {GlobalStyles} from "./styles/global";

function App() {
    const [createDialogOpen, setCreateDialogOpen] = useState(false);
    const [issues, setIssues] = useState([]);
    const [theme, toggleTheme] = useTheme();

    const openCreateDialog = () => setCreateDialogOpen(true);
    const closeCreateDialog = () => setCreateDialogOpen(false);
    const addIssue = (newIssue) => {
        setCreateDialogOpen(false);
        setIssues([...issues, newIssue]);
    }

    const updateIssue = (updatedIssue) => {
        let copy = [...issues.filter(i => i.id !== updatedIssue.id)];
        //no specific order needed since it gets ordered in the column
        setIssues([...copy, updatedIssue]);
    }

    const deleteIssue = (deletedId) => {
        let issuesWithoutDeleted = [...issues.filter(i => i.id !== deletedId)];
        setIssues([...issuesWithoutDeleted]);
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
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles />
                <MenuBar openCreateDialog={openCreateDialog} theme={theme} toggleTheme={toggleTheme}/>
                <Sidenav openCreateDialog={openCreateDialog}/>
                <div className="main">
                    <CreateDialog
                        open={createDialogOpen}
                        closeDialog={closeCreateDialog}
                        addIssue={addIssue}
                    />
                    <Switch>
                        <Route exact path="/">
                            {/* conditional for login goes here */}
                            <Redirect to="/board" />
                        </Route>
                        <Route exact path="/issues/:issueId">
                            <IssueDetails
                                updateIssue={updateIssue}
                                deleteIssue={deleteIssue}
                            />
                        </Route>
                        <Route exact path="/board">
                            <Board issues={issues} />
                        </Route>
                    </Switch>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
