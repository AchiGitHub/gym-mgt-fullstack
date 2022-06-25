import React, { ComponentType } from "react";

function AuthLayout<T>(WrappedComponent: ComponentType<T>) {
  return (props: T) => {
    return (
      <>
        <WrappedComponent {...props} />
      </>
    );
  };
}

export default AuthLayout;
