import { Route, Routes } from "react-router-dom"
import { Clientes } from "./components/clientes/Clientes"
import { NavBar } from "./layout/NavBar"


export const AppRoutes = () => {
  return (

    <Routes>

      <Route path="/clientes" element={<Clientes />} />
      <Route path="*" element={<NavBar />} />
      
    </Routes>
  )

}
