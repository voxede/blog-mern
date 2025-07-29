import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import GlobalStyles from "./styles/GlobalStyles.js"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { AuthProvider } from "./context/AuthContext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
