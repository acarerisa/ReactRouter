import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Java from "./Java";
import Javascript from "./Javascript";
import Python from "./Python";

export default function Topics() {
  return (
    <div>
      <h1>Programlama Dilleri</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/topics/python">Python</Link>
            </li>
            <li>
              <Link to="/topics/java">Java</Link>
            </li>
            <li>
              <Link to="/topics/javascript">Javascript</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route path="/topics/python" component={Python} />
          <Route path="/topics/java" component={Java} />
          <Route path="/topics/javascript" component={Javascript} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
