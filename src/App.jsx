import './App.css'

function WelcomeMessage(name) {
  return `Welcome to My React App, ${name}`;
}
function App() {
  return (
    <div>
      <h1>{WelcomeMessage('John')}</h1>
      <h1>{WelcomeMessage('Jane')}</h1>
      <h1>{WelcomeMessage('Alice')}</h1>
      <h1>{WelcomeMessage('Bob')}</h1>
      <h1>{WelcomeMessage('Charlie')}</h1>
      <h1>{WelcomeMessage('Dave')}</h1>
      <h1>{WelcomeMessage('Eve')}</h1>
      <h1>{WelcomeMessage('Frank')}</h1>  
    </div>
  );
}

export default App
