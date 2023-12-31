import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import Calendar from "./pages/Calendar/Calendar";
import DataGrid from "./pages/DataGrid/DataGrid";

const App = () => {
  return <div id="dashboard">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path = "dashboard" element={<Dashboard/>}/>
          <Route path = "Calendar" element={<Calendar/>}/>
          <Route path = "users" element={<DataGrid/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </div>;
};

export default App;
