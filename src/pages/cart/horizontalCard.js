import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';

export default function HorizontalCard({ product, updateQuantity }) {
    const { title, description, price, image, quantity, id } = product;

    const handleOnChange = (event) => {
        updateQuantity(id, Number(event.target.value))
    }

    return (
        <Card sx={{ display: 'flex' }}>
            <Grid container spacing={2}>
            <Grid item xs={2}>
                <CardMedia
                    component="img"
                    sx={{ height: 100, width: 100 }}
                    image={image}
                    alt={title}
                />
            </Grid>
            <Grid item xs={10}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <Box>
                                <Typography component="div" variant="h5">
                                    {title}
                                </Typography>
                                <Typography component="p" variant="p">
                                    {description}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box>

                                <Typography component="div" variant="h5">
                                    {price}
                                </Typography>

                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box>
                                <TextField type="number" value={quantity} onChange={(event) => handleOnChange(event)} />
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box>
                                {quantity * price}
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Grid>
            </Grid>
        </Card>
    );
}