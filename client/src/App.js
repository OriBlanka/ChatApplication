import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Join from './component/Join/Join.js';
import Chat from './component/Chat/Chat';

const App = () => (
 <Router>
    <Route path="/" exact component={Join}/>
    <Route path="/chat" component={Chat}/>
 </Router>
);

export default App;
