import React, { ComponentType } from "react";

function DefaultLayout<T>(WrappedComponent: ComponentType<T>) {
  return (props: T) => {
    return (
      <>
        <WrappedComponent {...props} />
      </>
    );
  };
}

export default DefaultLayout;
