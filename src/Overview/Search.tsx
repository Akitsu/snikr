import React, { Dispatch, SetStateAction } from 'react';
import { useFormik } from 'formik';

interface SearchProps {
  setName: Dispatch<SetStateAction<string | undefined>>;
}

const Search = ({ setName }: SearchProps) => {
  const formik = useFormik({
    initialValues: {
      query: ''
    },
    onSubmit: (values: { query: string }) => setName(values.query)
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input type="text" name="query" onChange={formik.handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
