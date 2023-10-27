import React from "react"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import { store } from "./store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"

const router = createBrowserRouter([{ path: "/", element: <Home /> }])

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={{}}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  )
}
