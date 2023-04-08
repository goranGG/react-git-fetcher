import "./App.css";
import ResetData from "./components/Reset/ResetData";
import UserDetails from "./components/UserDetails/UserDetails";
import UserForm from "./components/UserForm/UserForm";
import UserRepos from "./components/UserRepository/UserRepos";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <UserForm></UserForm>
        <UserDetails></UserDetails>
        <UserRepos></UserRepos>
        <ResetData></ResetData>
      </UserContextProvider>
    </div>
  );
}

export default App;
