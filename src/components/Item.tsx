import React, { useState } from "react";
import { styled, Checkbox } from "@mui/material";
import "./Item.css";

interface ItemProps {
  text: string[];
  asset: string;
}

const Item: React.FC<ItemProps> = ({ text, asset }) => {
  const [checked, setChecked] = useState(false);

  function Limerick() {
    return (
      <>
        <p>{text[0]}</p>
        <p>{text[1]}</p>
        <p>{text[2]}</p>
        <p>{text[3]}</p>
      </>
    );
  }

  return (
    <StyledItem>
      <Checkbox
        size="large"
        checked={checked}
        onChange={() => setChecked(!checked)}
        color="success"
      />
      <StyledLimerick>
        <Limerick />
      </StyledLimerick>
      <StyledIcon className={checked ? "fade-in" : "fade-out"}>
        <img src={asset} alt={"test"} />
      </StyledIcon>
    </StyledItem>
  );
};

const StyledLimerick = styled("div")(() => ({
  padding: "10px",
}));

const StyledItem = styled("div")(({ theme }) => ({
  backgroundColor: "#90a955",
  color: "#fff",
  position: "relative",
  display: "flex",
  alignItems: "center",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  margin: "20px",
  height: "150px",
  "& p": {
    margin: 0,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    margin: "0 0 20px 0",
  },
}));

const StyledIcon = styled("div")(() => ({
  right: "10px",
  top: "50px",
  position: "absolute",
  width: "50px",
  height: "50px",
  alignSelf: "end",
}));

export default Item;
