/* eslint-disable react/prop-types */

import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main>{children}</main>
    </div>
  );
};
export default Layout;
