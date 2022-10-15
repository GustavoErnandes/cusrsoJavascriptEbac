import React from 'react';

const style = {
    display: 'flex',
    justifyContent:"center",
    alignContent:"center",
    width: "100%",
    height: 800,
    marginTop: "50px",
    paddingTop: "50px"
}

function Container({children}) {
  return (
    <div style={style}>
        
        {children}
    </div>
  );
}

export default Container;