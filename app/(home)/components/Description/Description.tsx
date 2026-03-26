import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Description = ({ children }: Props) => {
  return (
    <div className="description-container flex flex-col flex-1 py-6 px-8 gap-1">
      {children}
    </div>
  );
};

export default Description;
