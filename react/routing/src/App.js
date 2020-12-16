import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Redirect
} from 'react-router-dom'
import { Guard } from './components/Guard';

import { AddTodo } from './views/AddTodo';
import { Login } from './views/Login';
import { Todo } from './views/Todo';
import { Todos } from './views/Todos'

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Todos} exact={true} path="/" />
        <Guard component={AddTodo} path="/add-todos" />
        <Redirect from="/tambah-todos" to="/add-todos" />
        <Route component={Login} path="login" />
        <Route component={Todo} exact path="/:id" />    
        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
