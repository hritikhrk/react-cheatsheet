import React from "react";

function FragmentDemo() {
  return (
    // <React.Fragment>
    //   <h1>Fragment Demo</h1>
    //   <p>This describes the Fragmnt Demo component</p>
    // </React.Fragment>
    <>
      <h1>Fragment Demo</h1>
      <p>This describes the Fragmnt Demo component</p>
    </>
    // Note: using empty tag won't let you use key tag
  );
}

export default FragmentDemo;
