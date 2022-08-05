import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import '../style/machineCard.css';

export const MachineCard = ({ item }) => {
  return (
    <Box
      sx={{
        minWidth: 275,
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      className='cardContainer'
    >
      <Card className='card'>
        <React.Fragment>
          <CardContent>
            <Typography variant='h5' component='div'>
              {item.name}
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              color='text.secondary'
              className={item.machineStat.status ? 'working' : 'notworking'}
              id='status'
            >
              {item.machineStat.status ? 'Çalışıyor' : 'Çalışmıyor'}
            </Typography>

            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              {item.machineStat.status
                ? `${item.machineStat.workDuration} süredir çalışıyor`
                : `Toplam Çalışma Süresi: ${item.machineStat.workDuration}`}
            </Typography>

            <Typography variant='body1'>
              Operatör: {item.operator.first_name} {item.operator.last_name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' variant='contained'>
              <Link to={`/machine/${item.id}`}>
                <span>Detay Sayfasına Git</span>
              </Link>
            </Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
};
