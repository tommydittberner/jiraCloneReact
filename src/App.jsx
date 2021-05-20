import './App.scss'
import Board from "./components/board/Board";
import Sidenav from "./components/Sidenav";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div className="wrapper">
        <MenuBar />
        <Sidenav />
        <div className="main">
            <Board />
        </div>
    </div>

  );
}

export default App;
