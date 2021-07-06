import * as React from "react";
import _ from "lodash";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import numeral from "numeral";
import { ILabelAnnotations } from "./analyze";

type Props = {
  labelAnnotations: ILabelAnnotations[] | null;
};

const Result: React.FC<Props> = ({ labelAnnotations }) => {
  console.log(labelAnnotations);

  if (_.isNull(labelAnnotations)) {
    return <></>;
  } else if (_.isEmpty(labelAnnotations)) {
    return <>No results</>;
  } else {
    return (
      <Table className="l" size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Label</TableCell>
            <TableCell align="right">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {labelAnnotations.map((l) => (
            <TableRow key={l.description}>
              <TableCell>{l.description}</TableCell>
              <TableCell align="right">
                {numeral(l.score).format("0.0000%")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
};

export default Result;
