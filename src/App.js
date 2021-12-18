import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Inbox from "./pages/inbox/Inbox";
import NoMatch from "./pages/no-match/NoMatch";
import Profile from "./pages/profile/Profile";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="dashboard" element={<Dashboard />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="profile" element={<Profile />} />
        <Route path="shop" element={<Shop />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
