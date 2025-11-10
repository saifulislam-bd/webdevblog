import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[1920px] w-full px-4 py-4 xl:px-20">{children}</div>
  );
}

export default Container;
