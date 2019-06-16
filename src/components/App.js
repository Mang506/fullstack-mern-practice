import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';


class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests'
  };
  componentDidMount(){
    // timers, liseners... ajax etc
  }
  componentWillMount(){
    // clean timers, listeners... removes gunk from didMount

  }
  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <div>
          {this.props.contests.map(contest => 
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>
    );
  }
}
  
export default App;