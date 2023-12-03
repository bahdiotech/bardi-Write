import { Route, Routes } from "react-router";
import { CreatePage, HomePage, PageNotFound } from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/create" element={<ProtectedRoutes><CreatePage /></ProtectedRoutes>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  )
}
