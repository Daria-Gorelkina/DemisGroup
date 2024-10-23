import { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import Main from "./Main"
import TableNews from "./TableNews";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import "./styles.css";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleDataSubmitted = () => {
    setRefresh(!refresh);
  };

  return (
 /*     <div className="container mt-5">
          <Form onDataSubmitted={handleDataSubmitted} />
          <Table key={refresh} />
      </div> */
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="" element={
                      <div>
                          <h1>Home</h1>
                          <Main />
                          <div><Link to="/news">Все новости</Link></div>
                          <div><Link to="/form">Обратная связь</Link></div>
                      </div>
                  }/>
                  <Route path="news" element={<TableNews />}/>
                  <Route path="form" element={
                      <div className="container mt-5">
                          <Form onDataSubmitted={handleDataSubmitted} />
                          <Table key={refresh} />
                      </div>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;

