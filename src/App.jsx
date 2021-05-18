import './App.scss'
import ScrumBoard from "./components/scrum-board/ScrumBoard";
import Sidenav from "./components/Sidenav";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div className="wrapper">
        <MenuBar />
        <Sidenav />
        <div className="main">
            <ScrumBoard />
        </div>
    </div>

  );
}

export default App;
