import React, {useState} from 'react';
import './index.css';
import Counter from '../Counter';
import CounterState from '../CounterState';
import { Title, Btn, BtnNew } from '../Styles/styles';
import SubTitle from '../Subtitle';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Avatar, colors, Divider, Link, Stack } from '@mui/material';


function App() {
  
  const label = { inputProps: { 'aria-label': 'Apagar as luzes' } };
  const [valueRating, setValueRating] = useState(
    {
      js:4, 
      ts:3,
      node: 4,
      webpack: 3,
      jquery: 3
    }
  )

  return (
    <div className=''>
      <Title> 
        <Typography variant='h3' color={colors.grey[800]} style={{flex:1, textAlign: "center", fontWeight:"bold"}}>Gustavo Ernandes</Typography>
        <span>
          <Typography variant='h4' color={colors.grey[600]} style={{flex:1, textAlign:"center"}}>Dev Front-End</Typography>
        </span>
      </Title>
      <SubTitle subtitle={"Habilidades"} />
      <Box
        sx={{
          '& > legend': { mt: 4 },
        }}
      >
        <Typography component="legend">JavaScript</Typography>
        <Rating
          name="simple-controlled"
          value={valueRating.js}
          onChange={(event, newValue) => {
            setValueRating({...valueRating, js: newValue === null ? 0 : newValue});
          }}
        />
      </Box>
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Typography component="legend">TypeScript</Typography>
        <Rating
          name="simple-controlled"
          value={valueRating.ts}
          onChange={(event, newValue) => {
            setValueRating({...valueRating, ts: newValue === null ? 0 : newValue});
          }}
        />
      </Box>
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Typography component="legend">Node Js</Typography>
        <Rating
          name="simple-controlled"
          value={valueRating.node}
          onChange={(event, newValue) => {
            setValueRating({...valueRating, node: newValue === null ? 0 : newValue});
          }}
        />
      </Box>
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Typography component="legend">Webpack</Typography>
        <Rating
          name="simple-controlled"
          value={valueRating.webpack}
          onChange={(event, newValue) => {
            setValueRating({...valueRating, webpack: newValue === null ? 0 : newValue});
          }}
        />
      </Box>
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Typography component="legend">JQuery</Typography>
        <Rating
          name="simple-controlled"
          value={valueRating.jquery}
          onChange={(event, newValue) => {
            setValueRating({...valueRating, jquery: newValue === null ? 0 : newValue});
          }}
        />
      </Box>
      <Divider style={{marginTop: 10, marginBottom: 10}} />
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <SubTitle subtitle={"Formação"} />
        <Typography variant='h6' color={colors.grey[700]} style={{fontWeight: 500, marginTop: 5}}>Téc. Desenvolvimento de Software <span style={{fontWeight:600}}>(2008)</span></Typography>
        <Typography variant='h6' color={colors.grey[700]} style={{fontWeight: 500, marginTop: 5}}>Web Design <span style={{fontWeight:600}}>(2014)</span></Typography>
        <Typography variant='h6' color={colors.grey[700]} style={{fontWeight: 500, marginTop: 5}}>Análise e Desenvolvimento de Sistemas <span style={{fontWeight:600}}>(2022)</span></Typography>

      </Box>
      <Divider style={{marginTop: 10, marginBottom: 10}} />
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <SubTitle subtitle={"Social"} />
        <Stack direction="row" spacing={4}>
          <Stack direction="row" spacing={2}>
            <Avatar alt='twitter' src='https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-3.png' />
            <Typography variant='h6' color={colors.grey[700]} style={{fontWeight: 500, marginTop: 5}}><Link href='https://twitter.com/gesm0302' underline='hover' target={"_blank"} rel="noreferrer">Twitter</Link></Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Avatar alt='facebook' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png' />
            <Typography variant='h6' color={colors.grey[700]} style={{fontWeight: 500, marginTop: 5}}><Link href='https://www.facebook.com/guga.ernandes' underline='hover' target={"_blank"} rel="noreferrer">Facebook</Link></Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Avatar alt='linkendin' src='https://cdn-icons-png.flaticon.com/512/174/174857.png' />
            <Typography variant='h6' color={colors.grey[700]} style={{fontWeight: 500, marginTop: 5}}><Link href='https://www.linkedin.com/in/gustavo-ernandes-8389a126' underline='hover' target={"_blank"} rel="noreferrer">Linkedin</Link></Typography>
          </Stack>
        </Stack>
      </Box>
      <Divider style={{marginTop: 10, marginBottom: 10}} />
    </div>
  );
}

export default App;
