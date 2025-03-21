import IntroPage from "./pages/IntroPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/SideBar";
import DialogBox from "./components/DialogBox";
import { handleLogout } from "./apis/submitActions";
import { useNavigate } from "react-router-dom";
function App() {

  if (localStorage.getItem("isAuthenticated") == "Yes") {
    return (
      <>
        <NavBar />
        <HomePage />
      </>
    );
  }
  return <IntroPage />;
}

export default App;
