import * as React from "react";
import { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import { Analyze, ILabelAnnotations } from "../components/analyze";
import Result from "../components/result";

const App = () => {
  // labelAnnotationsは、Resultに返すprops
  const [labelAnnotations, setAnnotations] = useState<
    ILabelAnnotations[] | null
  >(null);

  return (
    <Container style={{ marginTop: 10 }}>
      <Typography variant="h5" component="h1" style={{ marginBottom: 20 }}>
        Exam 2021.07 / Logical Fabrics
      </Typography>

      <Analyze {...{ setAnnotations }} />
      <Result {...{ labelAnnotations }} />
    </Container>
  );
};

export default App;
