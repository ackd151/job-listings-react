import { staticData } from "./data";
import Header from "./components/Header";
import FilterBox from "./components/FilterBox";
import Listings from "./components/Listings";
import { useState } from "react";

function App() {
  const [filterState, setFilterState] = useState({
    vis: true,
    filters: ["Frontend", "CSS", "Javascript"],
  });

  return (
    <div className='App'>
      <Header />
      <FilterBox filter={filterState} />
      <Listings data={staticData} />
    </div>
  );
}

export default App;
