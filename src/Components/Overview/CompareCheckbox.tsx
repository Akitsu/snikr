import React from 'react';
import { useFormik } from 'formik';

interface CompareCheckboxProps {
  sneakerId: string;
  selectedSneakers: string[];
  toggle: (sneakerId: string) => void;
}

const CompareCheckbox = ({ sneakerId, selectedSneakers, toggle }: CompareCheckboxProps) => {
  const formik = useFormik({
    initialValues: {
      compare: false
    },
    onSubmit: () => {}
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="checkbox"
        name="compare"
        onChange={formik.handleChange}
        disabled={selectedSneakers.length === 2 && !formik.values.compare}
        onClick={() => toggle(sneakerId)}
      />
    </form>
  );
};

export default CompareCheckbox;
