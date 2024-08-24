import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import { Grid } from "@mui/material";
import CaseShowcase from "@/components/CaseShowcase";
import Masoud from "../../public/assets/mass/avatar.jpeg";
export default function Home() {
  return (
    <>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth={"lg"}>
          <Grid container spacing={2}>
            <Grid item md={3} sm={6} xs={12}>
              <CaseShowcase name={"Masoud Valilou"} photo={Masoud} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
