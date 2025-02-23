import { styled } from "@mui/material";
import Header from "./components/Header";
import Item from "./components/Item";

import GoldStar from "./assets/goldStar.svg";
import Heart from "./assets/heart.svg";
import Clover from "./assets/clover.svg";
import Balloon from "./assets/balloon.svg";
import Moon from "./assets/Moon.svg";
import Horeseshoe from "./assets/horseshoe.svg";
import Gold from "./assets/gold.svg";

function App() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
  const limericks = [
    [
      "If you know your music",
      "and you think you're smart",
      "talk to this guy",
      "to get your start"
    ]
  ]


  return (
    <>
      <Header />
      {days.includes("Monday") && (
          <Task>
            <Title>Monday</Title>
            <Item text={limericks[0]} asset={GoldStar} />
            <Item text={limericks[0]} asset={Heart} />
          </Task>
      )}
      {days.includes("Tuesday") && (
        <Task>
          <Title>Tuesday</Title>
          <Item text={limericks[0]} asset={Clover} />
          <Item text={limericks[0]} asset={Balloon} />
        </Task>
      )}
      {days.includes("Wednesday") && (
        <Task>
          <Title>Wednesday</Title>
          <Item text={limericks[0]} asset={Moon} />
          <Item text={limericks[0]} asset={Horeseshoe} />
        </Task>
      )}
      {days.includes("Thursday") && (
        <Task>
          <Title>Thursday</Title>
          <Item text={limericks[0]} asset={Gold} />
        </Task>
      )}
    </>
  );
}

const Title = styled("h1")({
  color: "#fff",
  fontSize: "2rem"
});

const Task = styled("div")(({theme}) => ({
  color: "green",
  padding: "1rem",
  borderRadius: "5px",
  [theme.breakpoints.down("sm")]: {
    fontsize: "1rem",
    margin: 0
  },
  [theme.breakpoints.up("sm")]: { 
    fontsize: "1.5rem",
    margin: "20px"
  }

}));

export default App;
