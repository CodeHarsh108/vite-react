import './App.css'

function App() {
  const isLoggedIn = false;
  // if(!isLoggedIn) {
  //   return <h1>Please log in</h1>;
  // }
  // return (
  //   <div className="App">
  //     <h1>Welcome to the App!</h1>
  //     <p>This is a simple React application.</p>
  //   </div>
  // );
  const element = <h1>{isLoggedIn ? "Welcome back" : "Please login"}</h1>
  const messages = [];
  return (
    <div>
      {element}
      {messages.length > 0 && <h1>You have {messages.length} unread messages.</h1>}
      {messages.length === 0 ? <h1>No new messages</h1> : null}
    </div>
  );
}

export default App
