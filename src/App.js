import Header from "./Components/Header";
import Validation from "./Components/Validation";
import './App.css';

function App({input, message}) {
  return (
    <div className="App">
    < div className="header">
     <Header/>
     <Validation input={input}  />
    </div>
    </div>
  );
}

export default App;
