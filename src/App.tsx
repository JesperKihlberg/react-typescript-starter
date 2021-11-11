import { AppBar, Avatar, Button, createStyles, Icon, IconButton, makeStyles, SvgIcon, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import Questions from "./components/quiz-helpers/Questions";
import SimpleFunctionalComponent from "./components/samples/SimpleFunctionalComponent";
import UseStateComponent1 from "./components/samples/UseStateComponent1";
import UseStateComponent2 from "./components/samples/UseStateComponent2";
import UseStateComponent3 from "./components/samples/UseStateComponent3";
import UseStateComponent4 from "./components/samples/UseStateComponent4";
import UseStateComponent5 from "./components/samples/UseStateComponent5";
import UseStateComponent6 from "./components/samples/UseStateComponent6";
import UseStateComponent7 from "./components/samples/UseStateComponent7";

var SimpleFunctionalComponentText = require("../public/samples/SimpleFunctionalComponent.txt");
var UseStateComponentComponentText1 = require("../public/samples/UseStateComponent1.txt");
var UseStateComponentComponentText2 = require("../public/samples/UseStateComponent2.txt");
var UseStateComponentComponentText3 = require("../public/samples/UseStateComponent3.txt");
var UseStateComponentComponentText4 = require("../public/samples/UseStateComponent4.txt");
var UseStateComponentComponentText5 = require("../public/samples/UseStateComponent5.txt");
var UseStateComponentComponentText6 = require("../public/samples/UseStateComponent6.txt");
var UseStateComponentComponentText7 = require("../public/samples/UseStateComponent7.txt");

const useStyles = makeStyles(() =>
  createStyles({
    imageIcon: {
      display: "flex",
      height: "inherit",
      width: "inherit",
    },
    iconRoot: {
      textAlign: "center",
    },
    questionContainers: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Avatar aria-label="recipe" style={{ backgroundColor: "transparent" }}>
              <img className={classes.imageIcon} src="./favicon.svg" />
            </Avatar>
            <Button color="inherit">React component lifecycle quiz</Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default App;
