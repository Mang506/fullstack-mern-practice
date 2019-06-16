import React from 'react';
import Header from './Header';


class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests'
  };
  componentDidMount(){
    // timers, liseners
  }
  componentWillMount(){
    // clean timrs, listeners
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