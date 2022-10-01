import React from "react";
import { Box, Grid } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Fansignup from "./component/FanSignup";
import TelentSignup from "./component/TelentSignup";
import "./component/style.css";
import "./App.css";

function App() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <div>
        <Grid container spacing={2} justifyContent="center" height={"100%"}>
          <Grid item xs={12} sm={8} className="signup_form">
            <Box component="div">
              <Box>
                <TabContext value={value}>
                  <Box>
                    <TabList
                      onChange={handleChange}
                      centered
                      className="signup_tab"
                    >
                      <Tab label="FAN SIGNUP" value="1" />
                      <Tab label="TALENT SIGNUP" value="2" />
                    </TabList>
                  </Box>
                  <TabPanel value="1" className="tab1 tabPanel">
                    <Fansignup />
                  </TabPanel>
                  <TabPanel value="2" className="tab2 tabPanel">
                    <TelentSignup />
                  </TabPanel>
                </TabContext>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
