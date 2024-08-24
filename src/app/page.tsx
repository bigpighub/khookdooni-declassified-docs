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
            <Grid
              item
              md={3}
              sm={6}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <CaseShowcase />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <CaseShowcase />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
