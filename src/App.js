import "./App.css";
import { Footer, Header } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="App flex flex-col dark:bg-slate-800 items-center">
      <Header/>
     <AllRoutes />
     <Footer />
    </div>
  );
}

export default App;
