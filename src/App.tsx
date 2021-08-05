import React from 'react';
import './css/App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CallLists from './components/CallLists';
import CallDetail from './components/CallDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="smaller">
                <Router>
                    <div className="header">
                        <Header />
                    </div>
                    <div className="body">
                        <Switch>
                            <Route path="/" exact component={CallLists} />
                            <Route path="/call/:callID" exact component={CallDetail} />
                            <Route>{`You've taken a wrong turn on your journey!`}</Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        </div>
    );
};

export default App;
