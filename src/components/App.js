import React from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: [] 
  };
  componentDidMount(){
    // timers, liseners... ajax etc
    axios.get('/api/contests')
      .then(resp => {
        this.setState({
          contests: resp.data.contests
        });
      })
      .catch(console.error);

    // this.setState({
    //   contests: data.contests
    // });
  }
  componentWillMount(){
    // clean timers, listeners... removes gunk from didMount

  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest => 
            // each element needs unique id, dont use array index id
            <ContestPreview key={contest.id} {...contest} /> 
          )}
        </div>
      </div>
    );
  }
}
  
export default App;