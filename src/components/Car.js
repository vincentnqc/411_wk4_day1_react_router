import React from 'react'
import cars from '../cars.json'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    let id = props.match.params.id
    let car = cars.find(item => item.id==id)
    console.log(id, car)
    return (<Container>
        <h1>{car.Name}</h1>
        <Paper>
            <Chip label={`ID:${car.id}`}></Chip>
        </Paper>
        </Container>
    )
}

export default Car