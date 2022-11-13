import { TextField, CssBaseline, Box, Container, Avatar } from "@mui/material";

export default function SignIn() {





  
  const buttonStyle =
    "  text-[1rem] relative rounded-[10px] border-[1px] px-[25px] py-[7px] mr-[2rem] mb-[1rem] ";

  return (
    <div>
      <CssBaseline />
      <Container 
     
      maxWidth="xs">
        <Box component="form">
          <Avatar sx={{ mx: "auto", bgcolor: "secondary.main" }}></Avatar>
          <TextField
            align-center
            margin="normal"
            label="Mail"
            required
            autoFocus
          />
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
          className={`mr-[35px] hover:bg-[#ECC5FB] ` + buttonStyle}
        >
          Giriş Yap
        </button>
      </Container>
    </div>
  );
}
