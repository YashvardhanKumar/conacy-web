import IntroPage from "./pages/IntroPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/SideBar";
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
