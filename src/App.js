import React from "react"
import Container from './Container'

//Styling
const styles = {
  container: {
    display: 'flex',
    backgroundColor: 'white',
    minHeight: '100vh',
    maxHeight: 'auto',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column'
  },
  header: {
    height: '10vh',
  }
};


function App() {
  return (
    <div className="App" style={styles.container}>
      <header style={styles.header}>
        <h1>Boodschappenlijst</h1>
      </header>
      <Container />
    </div>
  );
}

export default App;
