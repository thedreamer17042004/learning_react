import React from "react";
import './Card.css'
import { one, two, three } from "./Images";
import { CardActionArea, Container} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Card() {
  return (
    <div>
      <Container style={{ marginTop: "50px" }}>
        <Box
          sx={{ display: "flex", gap: "5", justifyContent: "space-between" ,}} 
          className='vip'
        >
          <CardActionArea style={{ width: "32%", overflow: "hidden" }} className="sieu">
            <img src={one} alt="good" />
            <Typography component={"subtitle1"} mt={10} ml={20}>
                hello
            </Typography>
          </CardActionArea>
          <CardActionArea style={{ width: "32%", overflow: "hidden" }} className="sieu">
            <img src={two} alt="good" />
            <Typography component={"subtitle1"} mt={10} ml={20}>
                hello
            </Typography>
          </CardActionArea>
          <CardActionArea style={{ width: "32%", overflow: "hidden" }} className="sieu">
            <img src={three} alt="good" />
            <Typography component={"subtitle1"} mt={10} ml={20}>
                hello
            </Typography>
          </CardActionArea>
        </Box>
      </Container>
    </div>
  );
}

export default Card;
