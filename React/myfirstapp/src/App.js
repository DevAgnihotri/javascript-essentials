function App(props) {
  const currDate = new Date();
  
  // CSS styles for components
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f9f7f7',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      backgroundImage: 'linear-gradient(to bottom right, #e3f2fd, #bbdefb)',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '15px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      padding: '30px 40px',
      maxWidth: '500px',
      width: '100%',
      textAlign: 'center',
      border: '1px solid #ddd',
    },
    header: {
      color: '#3f51b5',
      marginBottom: '10px',
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    dateTime: {
      backgroundColor: '#e8f5e9',
      padding: '10px 15px',
      borderRadius: '10px',
      margin: '10px 0',
      color: '#388e3c',
      fontSize: '1.2rem',
    },
    emoji: {
      fontSize: '2rem',
      margin: '10px 0',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.emoji}>🌟</div>
        <h1 style={styles.header}>Dev Agnihotri</h1>
        <div style={styles.dateTime}>
          <p>📅 Date: {currDate.toLocaleDateString()}</p>
          <p>⏰ Time: {currDate.toLocaleTimeString()}</p>
        </div>
        <div style={styles.emoji}>✨</div>
      </div>
    </div>
  );
}

export default App;