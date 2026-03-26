"use client";
import { useRouter } from "next/navigation";
interface Props extends React.ComponentPropsWithRef<"button">{
}
const BackButton = ({className,...props}:Props) => {
  const route = useRouter();
  return <button {...props} className={`w-fit rounded-md ${className}`} onClick={() => route.back()}>BackButton</button>;
};

export default BackButton;
