import { TextField, CssBaseline, Box, Container, Avatar } from "@mui/material";

import {
  createUserWithEmailAndPassword,
  updateCurrentUser,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../config/firebase";

export default function SignUp() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = createUserWithEmailAndPassword(auth, email, password);
      if (user) {
        navigate("/", {
          replace: true,
        });
      }
    } catch (err) {
      setErr(true);
    }

    try {
      const user = await updateCurrentUser(auth,email, password );
      if (user) {
        navigate("/", {
          replace: true,
        });
      }
    } catch (err) {
      setErr(true);
    }
  };

  const buttonStyle =
    "  text-[1rem] relative rounded-[10px] border-[1px] px-[25px] py-[7px] mr-[2rem] mb-[1rem] ";

  return (
    <form onSubmit={handleSubmit}>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box>
          <Avatar
            sx={{ mx: "auto", bgcolor: "secondary.main", alignSelf: "center" }}
          ></Avatar>
          <TextField
            onChange={(e) => setName(e.target.value)}
            value={name}
            fullWidth
            margin="normal "
            label="Adınız"
            required
            autoFocus
          ></TextField>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            align-center
            margin="normal"
            label="Mail"
            required
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            align-center
            margin="normal"
            label="Şifre"
            required
            type="password"
          />
        </Box>
        <button
        onClick={handleSubmit}
          type="submit"
          className={` bg-[#ECC5FB] m-{[10px]} ` + buttonStyle}
        >
          Kayıt Ol
        </button>
      </Container>
    </form>
  );
}
