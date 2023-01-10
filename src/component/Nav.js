import React from 'react';

function Nav ({lists}) {
    // const {lists} = props;
  // const lis = lists.map(list=><li key={list.id}>{list.title}</li>)
  return(
    <ul>
      {lists.map(list=><li key={list.id}>{list.title}</li>)}
    </ul>
  )
};

export default Nav;