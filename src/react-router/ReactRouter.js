import { Link, Route, BrowserRouter as Router } from 'react-router-dom'

import React from 'react';

const ReactRouter = () => {
    return (
            <Router>
              <header>
                <Link to="/">
                  <button>Home</button>
                </Link>
                <Link to="/about">
                  <button>about</button>         
                </Link>
                <Link to="/users">
                 <button>User</button>
                </Link>
              </header>
              <hr/>
              <main>
                {/* <Route exact path = "/" component={i} /> */}
                {/* <Route path="/about" component={About} /> */}
                {/* <Route path="/users" component={NotFound} /> */}
              </main>
            </Router>
    );
};

export default ReactRouter;