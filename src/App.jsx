import './App.css'

function WelcomeMessage(name) {
  return `Welcome to My React App, ${name}`;
}
function greeting(isMorning) {
  return isMorning ? "Good Morning!" : "Good Evening!";
}

function App() {
  const now = new Date();
  const isMorning = now.getHours() < 12;
  return (
    <div>
      <h1>{WelcomeMessage('John')}</h1>
      <h1>{WelcomeMessage('Jane')}</h1>
      {greeting(isMorning)}
      
    </div>
  );
}

export default App
