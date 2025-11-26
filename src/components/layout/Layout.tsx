import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen bg-[#203741] flex flex-col overflow-hidden">
      <div className="container mx-auto flex-grow flex flex-col justify-between overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Layout;