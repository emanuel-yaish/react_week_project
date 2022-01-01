import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignPage from "./pages/SignPage";
import NewUserPage from "./pages/NewUserPage";
import UpdateUserPage from "./pages/UpdateUserPage";
import DeleteUserPage from "./pages/DeleteUserPage";
import ProfilesPage from "./pages/ProfilesPage";
import MatchPage from "./pages/MatchPage";
import EventsPage from "./pages/EventsPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signpage" element={<SignPage />} />
        <Route path="/newUser" element={<NewUserPage />} />
        <Route path="/userpreferences" element={<UpdateUserPage />} />
        <Route path="/deleteuser" element={<DeleteUserPage />} />
        <Route path="/profiles" element={<ProfilesPage />} />
        <Route path="/datepage" element={<MatchPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </div>
  );
}

export default App;
