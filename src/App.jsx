import "./App.css";
import FilePicker from "./components/FilePicker";
import Uploader from "./components/Uploader";

function App() {
  return (
    <div className="App">
      <Uploader />
      <FilePicker />
    </div>
  );
}

export default App;
