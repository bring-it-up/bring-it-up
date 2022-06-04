import './App.css';
import RandomComponent from './components/randomComponent';
import FirstDropdown from "./components/firstDropdown";

function App() {
  return (
    <div>
      <RandomComponent str={"testing"} ></RandomComponent>
      <FirstDropdown str="category 1" options={["1", "2", "3"]}></FirstDropdown> 
    </div>
  );
}

export default App;
