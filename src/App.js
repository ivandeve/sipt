import logo from "./logo.svg";
import "./App.css";
import Login from "./page/auth/login";
import { ChakraProvider } from '@chakra-ui/react'
import Routesitem from "./routes/routes";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Routesitem />
      </ChakraProvider>
    </div>
  );
}

export default App;
