import React from 'react'
// mui(CSSフレームワーク=あらかじめ部品などのスタイルが適用されているものの総称)
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const ButtonBlock = ( { title, ookisa, iro, text } ) => {
  return (
    <div>
        <h1>{title}</h1>
        <AccessAlarmIcon />
        <div>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </div>
        <Button variant="contained"  size={ookisa} color={iro}>
          {text}
        </Button>
    </div>
  )
}

export default ButtonBlock;
