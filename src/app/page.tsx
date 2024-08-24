import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import { Grid } from "@mui/material";
import CaseShowcase from "@/components/CaseShowcase";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Big pig started...
        </Typography>

        <Container disableGutters maxWidth={"xl"}>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <CaseShowcase />
            </Grid>
            <Grid item md={3}>
              <CaseShowcase />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
}
