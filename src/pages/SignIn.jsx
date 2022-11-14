import { TextField, CssBaseline, Box, Container, Avatar } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../config/firebase";

export default function SignIn() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        navigate("/", {
          replace: true,
        });
      }
    } catch (err) {
      setErr(true);
    }
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const buttonStyle =
    "  text-[1rem] relative rounded-[10px] border-[1px] px-[25px] py-[7px] mr-[2rem] mb-[1rem] ";

  return (
    <form onSubmit={handleSubmit}>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box>
          <Avatar sx={{ mx: "auto", bgcolor: "secondary.main" }}></Avatar>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            align-center
            margin="normal"
            label="Mail"
            required
            autoFocus
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
          type="submit"
          className={`mr-[35px] hover:bg-[#ECC5FB] ` + buttonStyle}
        >
          Giriş Yap
        </button>
        
      </Container>
    </form>
  );
}
