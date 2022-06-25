import React, { ComponentType } from "react";
import Dashboard from "../containers/dashboard/dashboard";

function DefaultLayout<T>(WrappedComponent: ComponentType<T>) {
  return (props: T) => {
    return (
      <Dashboard>
        <WrappedComponent {...props} />
      </Dashboard>
    );
  };
}

export default DefaultLayout;
