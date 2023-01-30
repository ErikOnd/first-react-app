import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ImageComponent imgSrc="https://www.pngplay.com/wp-content/uploads/9/Mario-PNG-HD-Quality.png" imgAlt="Mario" />
        <ButtonComponent btnInput="This is a button" />
      </header>
    </div>
  );
}

export default App;
