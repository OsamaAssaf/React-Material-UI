import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes.jsx";
import Create from "./pages/Create.jsx";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { purple } from "@mui/material/colors";
import Layout from "./components/Layout.jsx";

const theme = createTheme({
  palette: {
    // primary: {
    //   main: "#fefefe",
    // },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
