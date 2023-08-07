import { OneWeddingHall } from "./OneWeddingHall/OneWeddingHall";
import Records from "../../../records.json";
import { useContext } from "react";
import { valueContext } from "../Container";

export function WeddingHalls() {
  const { name, type, location, prices } = useContext(valueContext);

  return (
    <>
      {!name && !type && !location
        ? Records.map((record, id) => {
            return (
              <OneWeddingHall
                key={id}
                src={record.src}
                name={record.name}
                location={record.location}
                description={record.description}
                price={record.price}
                buttonText={record.buttonText}
                smallIcon={record.smallIcon}
                numberOfPeople={record.numberOfPeople}
              />
            );
          })
        : Records.filter(
            (record) =>
              (!name ||
                record.name.toLowerCase().includes(name.toLowerCase())) &&
              (!type || record.type === type) &&
              (!location || record.location === location) &&
              // tutaj zrobić filtr do ceny
              prices.forEach((price) => record.price < price)
          ).map((record, id) => {
            return (
              <OneWeddingHall
                key={id}
                src={record.src}
                name={record.name}
                location={record.location}
                description={record.description}
                price={record.price}
                buttonText={record.buttonText}
                smallIcon={record.smallIcon}
                numberOfPeople={record.numberOfPeople}
              />
            );
          })}
    </>
  );
}
