import { Routes, Route } from "react-router-dom";

import Alert from "./components/Alert";
import Footer from "./components/Footer";
import TopMenu from "./components/TopMenu";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <>
      <Alert />
      <header className="dark:bg-slate-800 flex flex-col justify-center">
        <TopMenu />
      </header>

      <main className="overflow-hidden flex flex-col xl:justify-normal xl:p-4 xl:items-start justify-center items-center h-full dark:bg-slate-800">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="flex flex-col h-full bg-slate-50 dark:bg-slate-900">
        <Footer />
      </footer>
    </>
  );
}

export default App
