import {View, Text, Button} from "react-native";
import React, {useState} from "react";
import CarRepository, {Car} from "../src/database/CarRepository";

const repository = new CarRepository();

export default function Home() {
    const [cars, setCars] = useState<Car[]>([]);

    const create = async () => {
        const id = await repository.create({
            brand: "VW",
            model: "Fusca",
            hp: Math.floor(Math.random() * 100),
        });
        console.log("Created: ", id);

        await all();
    };

    const all = async () => {
        const cars = await repository.all();
        setCars(cars);

        console.log(cars);
    };

    const deleteCar = async (id: number | undefined) => {
        await repository.delete(id);
        await all();
    }

    const search = async () => {
        const cars = await repository.search("Gol");
        setCars(cars);
    }

    const update = async (id: number) => {
        await repository.update(id, {
            brand: "VW",
            model: "Gol",
            hp: Math.floor(Math.random() * 100),
        });
        await all();
    }

    const searchByHpRange = async () => {
        const cars = await repository.searchByHpRange(25, 75);
        setCars(cars);
    }

    return (
        <View>
            <Button onPress={create} title="create"/>
            <Button onPress={all} title="all"/>
            <Button onPress={search} title="search"/>
            <Button onPress={searchByHpRange} title="searchByHpRange"/>

            {cars.map((car) => (
                <View key={car.id}>
                    <Text>{car.id} - </Text>
                    <Text>
                        {car.brand} {car.model} {car.hp}
                    </Text>
                    <Button onPress={() => update(car.id || 0)} title="update"/>
                    <Button onPress={() => deleteCar(car.id || 0)} title="delete"/>
                </View>
            ))}
        </View>
    );
}
