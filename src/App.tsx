import './App.css';
import LogInPage from './components/LogInPage/LogInPage';
import MainApp from './components/MainApp/MainApp'

function App() {
  return (
    <div className="App">
      // Not logged in
      <LogInPage />

      // Logged in
      <MainApp />
    </div>
  );
}

export default App;
