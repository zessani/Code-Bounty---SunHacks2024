import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <Typography variant="h2" component="h1" gutterBottom>
        Code Bounty
      </Typography>
    </Container>
  );
}
