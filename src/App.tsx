import TitleBar from "./components/global/TitleBar";
import LoginPage from "./pages/LoginPage";
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="h-screen w-screen">
      <TitleBar />
      <HashRouter basename="/">
        <Routes>
          <Route path="/" Component={LoginPage}/>
          <Route path="/main" Component={MainPage}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
