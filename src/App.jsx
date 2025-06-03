import './App.css'

function App() {
  const name = 'Alice';
  return (
    <div>
      <h1 className='greetings'>Hello, {name}!</h1>
      <p>Welcome to the React application.</p>
      <button ostyle={{ backgroundColor: 'blue', color: 'white' }}
      onClick={() => alert('Button clicked!')}>
      Click Me</button>
      <img src="https://placehold.co/100x100" alt="image" />
    </div>
  )
}

export default App
