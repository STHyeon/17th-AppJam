import React from "react";
import ReactDOM from "react-dom";
import "./lib/scss/index.scss";
import { App, AuthBox, ClockBox, FormBox } from "./containers";

import { Redirect, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import CalendarBox from "./containers/CalendarBox";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: "http://localhost:8000/graphql"
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/login" component={AuthBox} />
                <Route path="/register" component={AuthBox} />
                <Route path="/clock" component={ClockBox} />
                <Route path="/calendar" component={CalendarBox} />
                <Route path="/write" component={FormBox} />
                <Redirect path="*" to="/" />
            </Switch>
        </Router>
    </ApolloProvider>,
    document.getElementById("root")
);
