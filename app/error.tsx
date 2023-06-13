'use client'; // Error components must be Client Components
import { useEffect } from 'react';

type ErrorProps = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: ErrorProps) {
  const handleTry = () => {
    reset();
  };
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={handleTry}>Try again</button>
    </div>
  );
}
