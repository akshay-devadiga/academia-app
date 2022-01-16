import logo from './logo.png';
import './App.css';
import Card from './components/Card.js';
import Header from './components/Header';
import {
  Stack,
  Grid
} from "@chakra-ui/react";
const dummyArray = [1,2,3,4,5,6,7,8]
function App() {
  return (
    <div className="App" >
      <Header/>
        <Grid
        color="primary.800"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={3}
        px={20}
        mt={20}
      >
      {dummyArray.map(d=>{
         return <Card/>
      })}
      </Grid>
     
    </div>
  );
}

export default App;
