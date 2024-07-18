import "./App.css"
import { createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider, Route, useLocation } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Jobs from "./pages/jobs/Jobs";
import Professionals from "./pages/professionals/Professionals";
import Companies from "./pages/companies/Companies";
import Dashboard from "./pages/dashboard/Dashboard";
import Applications from "./pages/applications/Applications";
import JobsPosted from "./pages/jobsPosted/JobsPosted";
import MyProfile from "./pages/myProfile/MyProfile";
import Settings from "./pages/settings/Settings"
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import SearchAll from "./pages/searchAll/SearchAll";

function App() {
  const Layout = () => {
    const location = useLocation()
    return (
      <div className="app">
        { <Navbar /> }
        <Outlet />
      </div>
    );
  };
  const clientAccount = true; 

  const router = createBrowserRouter(createRoutesFromElements(

    
    <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route  te path="/search-all"  element={<SearchAll />}>
          <Route path="jobs"  element={<Jobs />} />
          <Route path="professionals"  element={<Professionals />} />
          <Route path="companies" element={<Companies />} />
          </Route>
          <Route path="/profile" exact element={<Profile />}> 
              <Route index  element={<MyProfile />}/>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="applications" element={<Applications />}/>
              <Route path="posted-jobs" element={<JobsPosted />}/>
              <Route path="settings" element={<Settings />}/>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
        

))
  return <RouterProvider router={router} />;
}

export default App;
