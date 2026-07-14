import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ==============================
// App Startup + Error Handling
// ==============================

async function initializeApp() {
  const rootElement = document.getElementById('root');
  if (!rootElement) return;

  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );

  // Short delay to ensure mount is complete
  await new Promise(resolve => setTimeout(resolve, 200));
}

window.addEventListener("load", async () => {
  const loading = document.getElementById("loading");

  try {
    console.log("App Starting...");

    // Disable UI while loading
    document.body.style.pointerEvents = "none";

    // ===== Your startup code =====
    await initializeApp();

    console.log("App Ready");

  } catch (error) {
    console.error("App Error:", error);
  } finally {
    // Hide loading screen
    loading?.remove();

    // Enable UI
    document.body.style.pointerEvents = "auto";
  }
});

// Catch unexpected JS errors
window.onerror = function(message, source, line, column, error) {
  console.error("Global Error:", {
    message,
    source,
    line,
    column,
    error
  });
  return false;
};

// Catch Promise errors
window.addEventListener("unhandledrejection", event => {
  console.error("Unhandled Promise:", event.reason);
});


