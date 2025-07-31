"use client"

import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import WelcomeMessage from "./components/WelcomeMessage"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import UserProfile from "./components/UserProfile"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo || "/placeholder.svg"} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo || "/placeholder.svg"} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Welcome Message Component */}
      <WelcomeMessage />

      {/* Header, Main Content, and Footer Components */}
      <Header />
      <MainContent />
      <Footer />

      {/* User Profile Component with Props */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
