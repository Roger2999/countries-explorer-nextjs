"use client";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const route = useRouter();
  return <button onClick={() => route.back()}>BackButton</button>;
};

export default BackButton;
