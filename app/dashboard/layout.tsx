"use client";

import Header from "../components/Header";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <Header /> {children}
      </body>
    </html>
  );
};

export default DashboardLayout;
