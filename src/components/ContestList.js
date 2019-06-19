import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests }) => (
  <div className="ContestList">
    {contests.map(contest =>
      <ContestPreview key={contest.id} {...contest} />  
    )}

  </div>
);

ContestList.protoTypes = {
  contests: PropTypes.array
};

export default ContestList;

{/* <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div> */}