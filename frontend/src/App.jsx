import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import FlightDetail from "./pages/FlightDetail";
import NotFoundPage from "./pages/NotFound";
import CheckStatus from "./pages/CheckStatus";
import GateAssignment from "./pages/GateAssignment";
import CheckIn from "./pages/CheckIn";
import TrackBaggage from "./pages/TrackBaggage";
import LoyalityProgram from "./pages/LoyalityProgram";
import StaffScheduling from "./pages/StaffScheduling";
import StaffPayroll from "./pages/StaffPayRoll";
import StaffCommunication from "./pages/StaffCommunication";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path = "/edit-flight" element = {<FlightDetail/>}/>
        <Route path = "/check-status" element={<CheckStatus/>}/>
        <Route path = "/gate-assignment" element={<GateAssignment/>}/>
        <Route path = "/checkIn" element={<CheckIn/>}/>
        <Route path = "/track-baggage" element={<TrackBaggage/>}/>
        <Route path = "/loyality-program" element={<LoyalityProgram/>}/>
        <Route path = "/scheduling" element={<StaffScheduling/>}/>
        <Route path = "/staff-payroll" element={<StaffPayroll/>}/>
        <Route path = "/staff-communication" element={<StaffCommunication/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
