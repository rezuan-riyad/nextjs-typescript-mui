import React from 'react';

export default function Button() {
  const [state, setState] = React.useState(false);

  const handleOnclick = () => {
    setState(!state);
  }

  return (
    <div>
      <div role="button" onClick={handleOnclick}>
        <span>Click Me</span>
      </div>
      {
        state ? <h1>True State</h1> : null
      }
    </div>
  )
}