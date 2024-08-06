
import { Route, Routes } from "react-router-dom";
import FormItems from "./Components/FormItems";
import Navigation from "./Components/Navigation";
import "./Style/App.scss";
import Home from "./Components/Home";



const App: React.FC = () => {
  
  return (
    <div className="app" style={{ padding: 50 }}>
      <Navigation />
     

      <Routes>
        <Route
          path="/"
          element={<Home />} 
        />


        <Route
          path="/formItems"
          element={<FormItems />}
        />
      
        <Route path="*" element={<h1 style={{font : "1.3em"}} >4040 Page Not Found </h1>} />
       
      </Routes>
    </div>
  );
};

export default App;
