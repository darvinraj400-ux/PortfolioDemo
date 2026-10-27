import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Global error handlers
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Browser support check
function checkBrowserSupport(): boolean {
  try {
    const testArrow = () => {};
    const testLet = (() => { let x = 1; return x; })();
    const testConst = (() => { const y = 2; return y; })();
    const testTemplate = `test ${testLet}`;
    const testDestructure = (() => { const { a } = { a: 1 }; return a; })();
    
    if (!document.querySelector) return false;
    if (!document.addEventListener) return false;
    if (!window.requestAnimationFrame && !((window as any).webkitRequestAnimationFrame)) return false;
    
    return true;
  } catch (e) {
    return false;
  }
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error('Root element not found');
} else if (!checkBrowserSupport()) {
  rootElement.innerHTML = `
    <div style="padding: 2rem; text-align: center; color: #0a0a0a; font-family: monospace; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #f5f2ed;">
      <h1 style="font-size: 1.5rem; margin-bottom: 1rem; font-weight: 400;">Browser Not Supported</h1>
      <p style="color: #555555; margin-bottom: 2rem; max-width: 400px;">
        This portfolio requires a modern browser. Please update your browser or try 
        <a href="https://www.google.com/chrome/" style="color: #0055ff;">Chrome</a>, 
        <a href="https://www.mozilla.org/firefox/" style="color: #0055ff;">Firefox</a>, or 
        <a href="https://www.apple.com/safari/" style="color: #0055ff;">Safari</a>.
      </p>
    </div>
  `;
} else {
  try {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Failed to render app:', error);
    rootElement.innerHTML = `
      <div style="padding: 2rem; text-align: center; color: #0a0a0a; font-family: monospace; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #f5f2ed;">
        <h1 style="font-size: 1.5rem; margin-bottom: 1rem; font-weight: 400;">Failed to Load</h1>
        <p style="color: #555555; margin-bottom: 2rem; max-width: 400px;">
          The portfolio failed to initialize. Please try refreshing the page.
        </p>
        <button onclick="window.location.reload()" style="padding: 0.75rem 1.5rem; background: #0055ff; color: #ffffff; border: none; border-radius: 4px; cursor: pointer; font-family: monospace; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; min-height: 44px;">
          Refresh Page
        </button>
      </div>
    `;
  }
}
