import logo from "./logo.svg";
import "./App.css";
import Login from "./page/auth/login";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Login />
      </ChakraProvider>
    </div>
  );
}

export default App;
