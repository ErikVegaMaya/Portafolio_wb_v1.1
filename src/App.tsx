import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppNavigator from "./components/navigators/AppNavigator";
//React query config
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Router>
        <QueryClientProvider client={queryClient}>
          <AppNavigator />
        </QueryClientProvider>
      </Router>
    </div>
  );
}

export default App;
