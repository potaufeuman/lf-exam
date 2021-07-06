import * as React from 'react';
import { useState, useEffect } from 'react';
import useAxios from 'axios-hooks';
import _ from 'lodash';
import { TextField, Button, Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

export interface ILabelAnnotations {
  locations: any[];
  properties: any[];
  mid: string;
  locale: string;
  description: string;
  score: number;
  confidence: number;
  topicality: number;
  boundingPoly: any;
}

const useStyles = makeStyles((theme) => createStyles({
  root: {
    marginBottom: 20,
  },
  textField: {
    height: 40,
  },
  button: {
    height: 40,
  },
}));
// React.Dispatch; 「Aという型を指定して戻り値はない」という意味の関数
// React.SetStateAction; 「何かしらのデータそのもの」もしくは「受け付けた引数の型を返す何かしらの関数」
type Props = {
  setAnnotations: React.Dispatch<
    React.SetStateAction<ILabelAnnotations[] | null>
  >
}

export const Analyze: React.FC<Props> = ({ setAnnotations }) => {
  const classes = useStyles();
  const [imageUrl, setImageUrl] = useState('');
  const [{ data, loading }, callApi] = useAxios(
    {
      url: 'https://lf-exam-v2.web.app/api/analyze',
      params: { imageUrl },
    },
    { manual: true },
  );
  // useEffect に渡された関数はレンダーの結果が画面に反映された後に動作
  useEffect(() => {
    if (!_.isNil(data)) setAnnotations(data);
  }, [data, setAnnotations]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
    // textfield valueを記憶する
  };

  return (
    <Box className={classes.root}>
      <TextField
        required
        variant="outlined"
        label="Image URL"
        value={imageUrl}
        disabled={loading}
        onChange={handleChange}
        InputProps={{ className: classes.textField }}
        InputLabelProps={{ shrink: true }}
        style={{ marginRight: 10 }}
      />

      <Button
        variant="contained"
        color="primary"
        disabled={loading}
        className={classes.button}
        onClick={() => callApi()}
      >
        {loading ? 'Analyzing...' : 'Analyze'}
      </Button>
    </Box>
  );
};