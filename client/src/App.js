import {Route,Switch} from 'react-router-dom';
import HP from '../src/component/HomePage';

import Gameover from '../src/component/Gameover';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/" component={HP}/>
       <Route exact path="/gameover" component={Gameover}/>
     </Switch>
    </div>
  );
}

export default App;
