import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { displayBio: true };
  }

  render() {
    const bio = this.state.displayBio ? (
      <div>
        <h3>Coding is Fun</h3>
      </div>
    ) : null;

    return (
      <div>
        <h1>I Like Coding</h1>
        {bio}
      </div>
    );
  }
}

export default App;
