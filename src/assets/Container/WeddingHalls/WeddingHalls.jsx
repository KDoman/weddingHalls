import { OneWeddingHall } from "./OneWeddingHall/OneWeddingHall";
import Records from "../../../records.json";
import { useContext } from "react";
import { valueContext } from "../Container";

export function WeddingHalls() {
  // wyświetlają się ogłoszenia na podstawie filtrów
  const { name, type, location, price } = useContext(valueContext);

  const inputArray = document.querySelectorAll("#people-counter");

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
              (!price || record.price >= price)
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
