import React from 'react';
import Header from './Header';


class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests'
  };
  componentDidMount(){
    // timers, liseners... ajax etc
  }
  componentWillMount(){
    // clean timers, listeners... removes gunk from didMout

  }
  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <div>
          ...
        </div>
      </div>
    );
  }
}
  
export default App;