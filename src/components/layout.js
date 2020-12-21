import PropTypes from "prop-types";
import React from "react";

import Helmet from "react-helmet";
import Header from "./header";

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <script crossorigin="anonymous" src="https://kit.fontawesome.com/cec6c7097d.js"></script>
      </Helmet>
      <div className="app center flex flex-col font-sans items-center min-h-screen bg-main landing">
        <div className="flex flex-col w-4/5 lg:w-1/2 min-h-screen">
          <Header />
          <main className="flex flex-col flex-1 mx-auto w-full">
            {children}
          </main>

          <footer className="flex items-center justify-center">
            <div className="text-grey1 px-8 py-8">
              <p className="text-sm">
                ❤️
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
