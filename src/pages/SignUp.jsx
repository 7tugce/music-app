
import { TextField, CssBaseline, Box, Container, Avatar, AppBar, appBarClasses } from "@mui/material";

export default function SignUp() {
  

  const buttonStyle =
    "  text-[1rem] relative rounded-[10px] border-[1px] px-[25px] py-[7px] mr-[2rem] mb-[1rem] ";

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box component="form">
          <Avatar
            sx={{ mx: "auto", bgcolor: "secondary.main", alignSelf: "center" }}
          ></Avatar>
          <TextField
            fullWidth
            margin="normal "
            label="Adınız"
            required
            autoFocus
          ></TextField>
          <TextField align-center margin="normal" label="Mail" required />
          <TextField
            align-center
            margin="normal"
            label="Şifre"
            required
            type="password"
          />
        </Box>
        <button
          type="submit"
          className={` bg-[#ECC5FB] m-{[10px]} ` + buttonStyle}
        >
          Kayıt Ol
        </button>
      </Container>
    </>
  );
}

