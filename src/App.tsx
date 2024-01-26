import "./App.css";
import TitleBar from "./components/global/TitleBar";
import LoginPage from "./pages/LoginPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="h-screen w-screen">
      <TitleBar />
      <HashRouter basename="/">
        <Routes>
          <Route path="/" Component={LoginPage}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
