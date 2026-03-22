import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="min-h-screen flex flex-col mt-3 text-center">
      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer className="flex-1" />
      </div>
    </div>
  );
}

export default App;
