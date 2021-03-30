import React, { Dispatch, SetStateAction, useState } from 'react';
import api from '../utils/api';
import { useFormik } from 'formik';
import SearchFieldResultsProps from './SearchFieldResults';

interface SearchProps {
  onSelect: Dispatch<SetStateAction<string>>;
}

const Search = ({ onSelect }: SearchProps) => {
  const [sneakerResults, setSneakerResults] = useState([]);
  const [searchFieldIsFocussed, setSearchFieldIsFocussed] = useState(false);

  const getSneakers = async (query: string) => {
    try {
      const sneakerData = await api.getSneakers({ limit: '10', name: query });
      setSneakerResults(sneakerData.results);
    } catch (err) {
      console.error("Search:getSneakers: " + err);
    }
  };

  const formik = useFormik({
    initialValues: {
      query: ''
    },
    onSubmit: (values: { query: string }) => getSneakers(values.query)
  });

  const onClick = (sneakerId: string) => {
    formik.resetForm();
    setSearchFieldIsFocussed(false);
    onSelect(sneakerId);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          name="query"
          type="text"
          autoComplete="off"
          onChange={formik.handleChange}
          onFocus={() => setSearchFieldIsFocussed(true)}
          value={formik.values.query}
        />
      </form>
      {searchFieldIsFocussed && sneakerResults.length > 0 && <SearchFieldResultsProps sneakerResults={sneakerResults} onClick={onClick} />}
    </div>
  );
};

export default Search;
