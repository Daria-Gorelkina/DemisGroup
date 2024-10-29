import { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import Main from "./Main"
import TableNews from "./TableNews";
import {Routes, Route, Link, HashRouter} from "react-router-dom";
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
      <div class="h-100 d-flex align-items-center">
          <HashRouter>
              <Routes>
                  <Route path="" element={
                      <div className="container h-100">
                          <div className="row">
                              <div className="col">
                                  <h1 className="text-center">Home</h1>
                                  <Main />
                                  <div className="text-center"><Link to="news">Все новости</Link></div>
                                  <div className="text-center"><Link to="form">Обратная связь</Link></div>
                              </div>
                          </div>
                      </div>
                  }/>
                  <Route path="news" element={<TableNews />}/>
                  <Route path="form" element={
                      <div className="container mt-5">
                          <div className="row">
                              <div className="col">
                                    <Form onDataSubmitted={handleDataSubmitted} />
                              </div>
                          </div>
                          <Table key={refresh} />

                      </div>}/>
              </Routes>
          </HashRouter>
      </div>
  );
}

export default App;

