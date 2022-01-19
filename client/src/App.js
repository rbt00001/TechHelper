import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import QuestionForm from "./pages/QuestionForm";

import "./App.css";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/Login" element={<Login />} />

            <Route exact path="/QuestionForm" element={<QuestionForm />} />

            <Route element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
