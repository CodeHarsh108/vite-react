import './App.css'

function WelcomeMessage(name) {
  return `Welcome to My React App, ${name}`;
}
function greeting(isMorning) {
  return isMorning ? "Good Morning!" : "Good Evening!";
}
function showAlert(condition, message) {
  if (condition) {
    alert(message);
  }
  return null;
}

function App() {
  const now = new Date();
  const isMorning = now.getHours() < 12;
  return (
    <div>
      <h1>{WelcomeMessage('John')}</h1>
      {greeting(isMorning)}
      {showAlert(isMorning, "It's a beautiful morning!")}
      
    </div>
  );
}

export default App
