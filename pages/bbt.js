import { useState } from "react";
import { TextField, Box, Stack, Button } from "@mui/material";
import Image from "next/image";

import puzzle1 from "../components/bbtViews/images/puzzle-one.png";
import puzzle2 from "../components/bbtViews/images/puzzle-two.png";
import puzzle3 from "../components/bbtViews/images/puzzle-three.png";
import successImg from "../components/bbtViews/images/success.png";
import blueRidge from "../components/bbtViews/images/Blue Ridge.jpeg";

const Bbt = () => {
  const [begin, setBegin] = useState(true);
  const [firstPuzzle, setFirstPuzzle] = useState(false);
  const [passwordOne, setPasswordOne] = useState(false);
  const [secondPuzzle, setSecondPuzzle] = useState(false);
  const [passwordTwo, setPasswordTwo] = useState(false);
  const [thirdPuzzle, setThirdPuzzle] = useState(false);
  const [passwordThree, setPasswordThree] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);
  const [success, setSuccess] = useState(false);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  const [fifth, setFifth] = useState("");
  const [sixth, setSixth] = useState("");

  function handleStart(e) {
    setBegin(false);
    setFirstPuzzle(true);
  }

  function showPasswordOne(e) {
    setFirstPuzzle(false);
    setPasswordOne(true);
  }

  function renderFirstPuzzle() {
    return (
      <Stack>
        <h2>First Puzzle</h2>
        <Image src={puzzle1} alt="coded puzzle" />
        <Button
          variant="outlined"
          sx={{
            width: "fit-content",
            px: 2,
            color: "black",
            mt: 4,
            mx: "auto",
          }}
          onClick={showPasswordOne}
        >
          Try Solution
        </Button>
      </Stack>
    );
  }

  function handleSubmitOne(e) {
    if (first === "a" && second === "l" && third === "i" && fourth === "x") {
      setTryAgain(false);
      setPasswordOne(false);
      setSecondPuzzle(true);
    } else {
      setTryAgain(true);
    }
  }

  function renderPasswordOne() {
    return (
      <Stack>
        <h2>Enter First Password</h2>
        <Box>
          <TextField
            sx={{ width: "40px", height: "40px", m: 1 }}
            onKeyUp={(e) => setFirst(e.target.value)}
          ></TextField>
          <TextField
            sx={{ width: "40px", height: "40px", m: 1 }}
            onKeyUp={(e) => setSecond(e.target.value)}
          ></TextField>
          <TextField
            sx={{ width: "40px", height: "40px", m: 1 }}
            onKeyUp={(e) => setThird(e.target.value)}
          ></TextField>
          <TextField
            sx={{ width: "40px", height: "40px", m: 1 }}
            onKeyUp={(e) => setFourth(e.target.value)}
          ></TextField>
        </Box>
        <Button
          variant="outlined"
          sx={{
            width: "fit-content",
            px: 2,
            color: "black",
            mt: 4,
            mx: "auto",
          }}
          onClick={handleSubmitOne}
        >
          Submit
        </Button>
        {tryAgain ? <p>Try Again</p> : null}
      </Stack>
    );
  }

  function showPasswordTwo(e) {
    setSecondPuzzle(false);
    setPasswordTwo(true);
  }

  function renderSecondPuzzle() {
    return (
      <Stack>
        <h2>Second Puzzle</h2>
        <Image src={puzzle2} alt="coded puzzle" />
        <Button
          variant="outlined"
          sx={{
            width: "fit-content",
            px: 2,
            color: "black",
            mt: 4,
            mx: "auto",
          }}
          onClick={showPasswordTwo}
        >
          Try Solution
        </Button>
        <Stack sx={{ mt: 10 }}>
          <h2>Previous Puzzle</h2>
          <Image src={puzzle1} alt="coded puzzle" />
        </Stack>
      </Stack>
    );
  }

  function handleSubmitTwo(e) {
    if (first === "00") {
      setTryAgain(false);
      setPasswordTwo(false);
      setThirdPuzzle(true);
    } else {
      setTryAgain(true);
    }
  }

  function renderPasswordTwo() {
    return (
      <Stack>
        <h2>Tell Shelley Second Password</h2>
        <Box>
          <TextField
            sx={{ width: "60px", height: "40px", m: 1 }}
            onKeyUp={(e) => setFirst(e.target.value)}
          ></TextField>
        </Box>
        <Button
          variant="outlined"
          sx={{
            width: "fit-content",
            px: 2,
            color: "black",
            mt: 4,
            mx: "auto",
          }}
          onClick={handleSubmitTwo}
        >
          Submit
        </Button>
        {tryAgain ? <p>Try Again</p> : null}
      </Stack>
    );
  }

  function showPasswordThree(e) {
    setThirdPuzzle(false);
    setPasswordThree(true);
  }

  function renderThirdPuzzle() {
    return (
      <Stack>
        <h2>Third Puzzle</h2>
        <Image src={puzzle3} alt="coded puzzle" />
        <Button
          variant="outlined"
          sx={{
            width: "fit-content",
            px: 2,
            color: "black",
            mt: 4,
            mx: "auto",
          }}
          onClick={showPasswordThree}
        >
          Try Solution
        </Button>
        <Stack>
          <h2>Previous Puzzles</h2>
          <Image src={puzzle1} alt="coded puzzle" />
          <Image src={puzzle2} alt="coded puzzle" />
        </Stack>
      </Stack>
    );
  }

  function handleSubmitThree(e) {
    if (
      first === "b" &&
      second === "u" &&
      third === "b" &&
      fourth === "b" &&
      fifth === "l" &&
      sixth === "e"
    ) {
      setTryAgain(false);
      setPasswordThree(false);
      setSuccess(true);
    } else {
      setTryAgain(true);
    }
  }

  function renderPasswordThree() {
    return (
      <Stack>
        <h2>Enter Third Password</h2>
        <Box>
          <TextField
            sx={{ width: "40px", height: "40px", m: 1 }}
            onKeyUp={(e) => setFirst(e.target.value)}
          ></TextField>
          <TextField
            sx={{ width: "40px", height: "40px", m: 1 }}
            onKeyUp={(e) => setSecond(e.target.value)}
          ></TextField>
          <TextField
            sx={{ width: "40px", height: "40px", m: 1 }}
            onKeyUp={(e) => setThird(e.target.value)}
          ></TextField>
          <TextField
            sx={{ width: "40px", height: "40px", m: 1 }}
            onKeyUp={(e) => setFourth(e.target.value)}
          ></TextField>
          <TextField
            sx={{ width: "40px", height: "40px", m: 1 }}
            onKeyUp={(e) => setFifth(e.target.value)}
          ></TextField>
          <TextField
            sx={{ width: "40px", height: "40px", m: 1 }}
            onKeyUp={(e) => setSixth(e.target.value)}
          ></TextField>
        </Box>
        <Button
          variant="outlined"
          sx={{
            width: "fit-content",
            px: 2,
            color: "black",
            mt: 4,
            mx: "auto",
          }}
          onClick={handleSubmitThree}
        >
          Submit
        </Button>
        {tryAgain ? <p>Try Again</p> : null}
      </Stack>
    );
  }

  function renderSuccess() {
    return (
      <Stack>
        <h1>You Did It!!!</h1>
        <h2>Head to the Kitchen for Your Treat</h2>
        <Image src={successImg} alt="Baileys and boba milk tea" />
      </Stack>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 6,
      }}
    >
      <div
        style={{
          zIndex: -1,
          opacity: 0.5,
        }}
      >
        <Image
          src={blueRidge}
          alt="Georgia mountain view"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <Stack>
        <h1>Time to Puzzle</h1>
        {begin ? (
          <Button
            variant="outlined"
            sx={{
              width: "fit-content",
              px: 2,
              color: "black",
              mt: 4,
              mx: "auto",
            }}
            onClick={handleStart}
          >
            Begin
          </Button>
        ) : null}
        {firstPuzzle ? renderFirstPuzzle() : null}
        {passwordOne ? renderPasswordOne() : null}
        {secondPuzzle ? renderSecondPuzzle() : null}
        {passwordTwo ? renderPasswordTwo() : null}
        {thirdPuzzle ? renderThirdPuzzle() : null}
        {passwordThree ? renderPasswordThree() : null}
        {success ? renderSuccess() : null}
      </Stack>
    </Box>
  );
};

export default Bbt;
