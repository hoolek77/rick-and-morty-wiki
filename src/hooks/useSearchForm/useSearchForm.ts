import { useState } from 'react';

export const useSearchForm = <T>(initialState: T) => {
  const [formState, setFormState] = useState<T>(initialState);

  const handleChange = (e: { target: HTMLInputElement | HTMLSelectElement }, keyofSearchParams: keyof T) => {
    setFormState((prev) => ({ ...prev, [keyofSearchParams]: e.target.value }));
  };

  return {
    formState,
    handleChange,
  };
};
