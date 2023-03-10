import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import FormComponent from './components/FormComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="img-div">
          <ImageComponent imgSrc="https://www.pngplay.com/wp-content/uploads/9/Mario-PNG-HD-Quality.png" imgAlt="Mario" bgColor="bg-green" />
          <ImageComponent imgSrc="https://www.pngplay.com/wp-content/uploads/12/Mario-And-Luigi-Free-PNG.png" imgAlt="Mario" bgColor="bg-red" />
          <ImageComponent imgSrc="https://www.pngplay.com/wp-content/uploads/7/Bowser-Download-Free-PNG.png" imgAlt="Mario" bgColor="bg-yellow" />
        </div>
        <ButtonComponent btnInput="This is a green button" bgColor="bg-green" btnVariant="success" />
        <ButtonComponent btnInput="This is a red button" bgColor="bg-red" btnVariant="warning" />
        <ButtonComponent btnInput="This is a yellow button" bgColor="bg-yellow" btnVariant="info" />
        <ButtonComponent btnInput="This is a black button" bgColor="bg-black" btnVariant="danger" />
        <FormComponent></FormComponent>
      </header>
    </div>
  );
}

export default App;
