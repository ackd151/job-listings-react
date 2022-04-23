import { staticData } from "./data";
import Header from "./components/Header";
import Listings from "./components/Listings";

function App() {
  return (
    <div className='App'>
      <Header />
      <Listings data={staticData} />
    </div>
  );
}

export default App;
