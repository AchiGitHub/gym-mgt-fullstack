import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import routes from "./routes";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => {
              let ViewComponent = route.layout(route.component);
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<ViewComponent />}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
