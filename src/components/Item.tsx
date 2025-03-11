import React, { useState} from "react";
import { styled, Checkbox } from "@mui/material";
import "./Item.css";

interface ItemProps {
  text: string[];
  asset: string;
  handleClick?: () => void; 
}

const Item: React.FC<ItemProps> = ({ text, asset }) => {
  const [checked, setChecked] = useState(false);

  function Limerick() {
    return (
      <StyledLimerick>
        <p>{text[0]}</p>
        <p>{text[1]}</p>
        <p>{text[2]}</p>
        <p>{text[3]}</p>
        <p>{text[4]}</p>
      </StyledLimerick>
    );
  }

  function handleCheckBoxClick() {
    setChecked(!checked);
  }

  return (
    <StyledItem>
      <Checkbox
        size="large"
        checked={checked}
        onChange={handleCheckBoxClick}
        color="success"
      />
      <Limerick />
      <StyledIcon className={checked ? "fade-in" : "fade-out"}>
        <img src={asset} alt={"test"} />
      </StyledIcon>
    </StyledItem>
  );
};

const StyledLimerick = styled("div")(({ theme }) => ({
  padding: "10px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.25rem",
  },
}));

const StyledItem = styled("div")(({ theme }) => ({
  background: "linear-gradient(45deg, #adcc66,rgb(138, 168, 69))",
  color: "#000",
  position: "relative",
  display: "flex",
  alignItems: "center",
  padding: "10px",
  borderRadius: "5px",
  margin: "20px",
  height: "175px",
  [theme.breakpoints.down("sm")]: {
    margin: "0 0 20px 0",
  },
}));

const StyledIcon = styled("div")(() => ({
  right: "10px",
  top: "50px",
  position: "absolute",
  width: "50px",
  height: "50px",
}));

export default Item;
