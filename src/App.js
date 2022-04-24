import { staticData } from "./data";
import Header from "./components/Header";
import FilterBox from "./components/FilterBox";
import Listings from "./components/Listings";
import { useState } from "react";

import { checkListing } from "./utils/filterUtils";

function App() {
  /* Filter state mgmt */
  const defaultFilterState = {
    vis: false,
    filters: [],
  };

  const [filterState, setFilterState] = useState(defaultFilterState);

  // Remove all filters and hide filter element
  const clearFiltersHandler = () => {
    setFilterState(defaultFilterState);
    setListings(staticData);
  };

  const addFilterHandler = (filter) => {
    setFilterState((prevState) => {
      const newState = { ...prevState };
      newState.vis = true;
      const newFilters = new Set([...prevState.filters, filter]);
      newState.filters = [...newFilters];
      filterListings(newState.filters);
      return newState;
    });
  };

  const removeFilterHandler = (filter) => {
    setFilterState((prevState) => {
      const newState = { ...prevState };
      const filterIdx = newState.filters.indexOf(filter);
      if (filterIdx !== -1) {
        newState.filters.splice(filterIdx, 1);
      }
      if (newState.filters.length < 1) {
        newState.vis = false;
      }
      filterListings(newState.filters);
      return newState;
    });
  };

  /* Listing state mgmt */
  // default = use all listings in static data set
  const [listings, setListings] = useState(staticData);

  const filterListings = (filters) => {
    setListings(() => {
      // If filters empty -> return all listings
      if (filters.length === 0) {
        return staticData;
      }
      const newState = [];
      for (const listing of staticData) {
        if (checkListing(listing, filters)) {
          newState.push(listing);
        }
      }
      return newState;
    });
  };

  return (
    <div className='App'>
      <Header />
      <FilterBox
        filter={filterState}
        onClearFilters={clearFiltersHandler}
        onRemoveFilter={removeFilterHandler}
      />
      <Listings
        data={listings}
        filtered={filterState.vis}
        onAddFilter={addFilterHandler}
        onRemoveFilter={removeFilterHandler}
      />
    </div>
  );
}

export default App;
