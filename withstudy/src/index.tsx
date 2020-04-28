import React from "react";
import ReactDOM from "react-dom";
import { ListPage, WritePage, AuthPage, CalendarPage, StopWatchPage } from "./pages";
import "./assets/scss/index.scss";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import { Redirect, Switch, Route, BrowserRouter as Router } from "react-router-dom";

const client = new ApolloClient({
    uri: "http://localhost:2000/graphql",
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <Switch>
                <Route path="/" exact component={ListPage} />
                <Route path="/write" component={WritePage} />
                <Route path="/calendarWrite" component={WritePage} />
                <Route path="/login" component={AuthPage} />
                <Route path="/logout" component={ListPage} />
                <Route path="/register" component={AuthPage} />
                <Route path="/calendar" component={CalendarPage} />
                <Route path="/stopwatch" component={StopWatchPage} />
                <Redirect path="*" to="/" />
            </Switch>
        </Router>
    </ApolloProvider>,
    document.getElementById("root")
);
