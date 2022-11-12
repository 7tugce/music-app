import {
    TextField,
    CssBaseline,
    Button,
    Box,
    Container,
    Avatar,
  } from "@mui/material";

export default function SignUp(){
    return(
       
            <>
              <CssBaseline />
              <Container maxWidth="xs">
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
                  <Button type="submit" sx={{ mt: 2 }}>
                    Giriş Yap
                  </Button>
                </Box>
              </Container>
            </>
          );
    
}