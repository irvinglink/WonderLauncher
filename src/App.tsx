import LoginPage from "./pages/LoginPage";
import { Routes, Route, HashRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TitleBar from "./components/global/TitleBar";

function App() {
  return (
    <div className="h-screen w-screen">
      <TitleBar />
      <HashRouter basename="/">
        <Routes>
          <Route path="/login" Component={LoginPage} />
          <Route path="/" Component={MainPage} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
