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
import {MainContainer} from "./styles/styles";

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

    const updateIssue = (updatedIssue) => setIssues(
        // reordering is done at a later point
        [...issues.filter(i => i.id !== updatedIssue.id), updatedIssue]
    );
    
    const deleteIssue = (deletedId) => setIssues(
        [...issues.filter(i => i.id !== deletedId)]
    );

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
                <MenuBar 
                    openCreateDialog={openCreateDialog} 
                    theme={theme} 
                    toggleTheme={toggleTheme}
                />
                <Sidenav openCreateDialog={openCreateDialog}/>
                <MainContainer>
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
                </MainContainer>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
