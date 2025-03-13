import { styled } from "@mui/material";
import Header from "./components/Header";
import Item from "./components/Item";

import GoldStar from "./assets/goldStar.svg";
import Heart from "./assets/heart.svg";
import Clover from "./assets/clover.svg";
import Balloon from "./assets/balloon.svg";
import Horeseshoe from "./assets/horseshoe.svg";

function App() {

  const MITHILA = 'You are a cheater! What are you looking at? Just thought you could get a sneak peak? Nice. I like that.';

  const limericks = [
    [
      "There once was a man with a knack",
      "For music trivia, never off track",
      "He'd quiz and he'd play",
      "First thing every day",
      "With knowledge that never did lack",
    ],
    [
      "There once was a crew so grand",
      "who's skills are the best in the land",
      "They'll fix every leak",
      "and each creaky squeak",
      "and keep the building running as planned",
    ],
    [
      "Their team recruits the best",
      "from the east and the west",
      "Their skills are on fire",
      "only the best do they hire",
      "and they are always well dressed",
    ],
    [
      "An ETG leprechaun from Texas, so bold",
      "Had a pot full of treasure and gold",
      "With points, he does fine",
      "Because they're all 99",
      "In the Lone Star State, tales are told",
    ],
    [
      "This team is one that is bright",
      "they keep us safe day and night",
      "They guard every door",
      "and protect ever floor",
      "keeping us safe and doing what's right",
    ],
  ];
  const Tuesday = () => {
    return (
      <Task>
        <Title>Tuesday</Title>
        <Item text={limericks[0]} asset={GoldStar} />
        <Item text={limericks[1]} asset={Heart} />
      </Task>
    );
  };

  const Wednesday = () => {
    return (
      <Task>
        <Title>Wednesday</Title>
        <Item text={limericks[2]} asset={Clover} />
        <Item text={limericks[3]} asset={Balloon} />
      </Task>
    );
  };

  const Thursday = () => {
    return (
      <Task>
        <Title>Thursday</Title>
        <Item text={limericks[4]} asset={Horeseshoe} />
      </Task>
    );
  };

  function getDate() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();

    switch (date.getDate()) {
      case 10:
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "90vh",
              color: "white",
              fontSize: "2rem",
            }}
          >
            Coming Tomorrow!
          </div>
        );
      case 11:
        return <Tuesday />;
      case 12:
        return (
          <>
            <Tuesday />
            <Wednesday />
          </>
        );
      case 13:
        if (hour >= 9 && minute >= 2) {
          console.log(`hour: ${hour}, minute: ${minute}`);
          return (
            <>
              <Tuesday />
              <Wednesday />
              <Thursday />
            </>
          );
        } else {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh",
                color: "white",
                fontSize: "2rem",
              }}
            >
              Nice try. Not until 9am.
            </div>
          );
        }
    }
  }

  return (
    <>
      <Header />
      {getDate()}
    </>
  );
}

const Title = styled("h1")({
  color: "#fff",
  fontSize: "2rem",
});

const Task = styled("div")(({ theme }) => ({
  color: "green",
  padding: "1rem",
  borderRadius: "5px",
  [theme.breakpoints.down("sm")]: {
    fontsize: "1rem",
    margin: 0,
  },
  [theme.breakpoints.up("sm")]: {
    fontsize: "1.5rem",
    margin: "20px",
  },
}));

export default App;
