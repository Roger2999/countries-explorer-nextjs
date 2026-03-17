"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center gap-10 pt-20">
      <h2 className="text-xl">
        Something went wrong!: {error.message.toUpperCase()}
      </h2>
      <button
        className="border border-white/20 py-1 px-2 rounded-sm backdrop-blur-xl hover:bg-white/10 active:scale-105"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
