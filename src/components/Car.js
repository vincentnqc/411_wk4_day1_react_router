import React from 'react'
import cars from '../cars.json'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import './Car.css'
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    let id = props.match.params.id
    let car = cars.find(item => item.id==id)
    console.log(id, car)
    return (<Container>
        <h1>{car.Name}</h1>
        <div class="box">
        <Paper style= {
            {height: 100,
            width: 500,
            justifyContent: "center",
            alignContent: "center",
        }}>
            <Chip label={`ID:${car.id}`}></Chip>
            <Chip label={`Name:${car.Name}`}></Chip>
            <Chip label={`MPG:${car.Miles_per_Gallon}`}></Chip>
            <Chip label={`Cylinders:${car.Cylinders}`}></Chip>
            <Chip label={`Displacement:${car.Displacement}`}></Chip>
            <Chip label={`Horsepower:${car.Horsepower}`}></Chip>
            <Chip label={`Weight Lbs:${car.Weight_in_lbs}`}></Chip>
            <Chip label={`Acceleration:${car.Acceleration}`}></Chip>
            <Chip label={`Year:${car.Year}`}></Chip>
            <Chip label={`Origin:${car.Origin}`}></Chip>
        </Paper>
        </div>
        </Container>
    )
}

export default Car