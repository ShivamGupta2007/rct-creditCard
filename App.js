import './App.css';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
    <ChakraProvider>
      <img className="img" src="https://i.imgur.com/XRr9W1T.png"></img>
    </ChakraProvider>

    </div>
  );
}

export default App;
