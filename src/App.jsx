import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home.jsx"
import { NotFound } from "./pages/NotFound.jsx"
import { ToastProvider } from "./components/ui/toast.jsx"
import { Toaster } from "./components/ui/toaster.jsx"



function App() {

  return (
    <>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </ToastProvider>
    </>
  )
}

export default App
