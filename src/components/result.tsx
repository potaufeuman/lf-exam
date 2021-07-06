import * as React from 'react';
import _ from 'lodash';
import { ILabelAnnotations } from './analyze';

type Props = {
  labelAnnotations: ILabelAnnotations[] | null
}

const Result: React.FC<Props> = ({ labelAnnotations }) => {
  console.log(labelAnnotations);
  return(
    <>
      {/* {labelAnnotations} */}
    </>
  );
}

export default Result;