import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import SearchResult from "./Components/SearchResult";

const SearchResultPage = () => (
  <Provider store={store}>

    <SearchResult />
  </Provider>
);

export default SearchResultPage;