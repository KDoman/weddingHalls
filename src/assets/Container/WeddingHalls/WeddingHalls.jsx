import { OneWeddingHall } from "./OneWeddingHall/OneWeddingHall";
import Records from "../../../records.json";
import { useContext } from "react";
import { valueContext } from "../Container";

export function WeddingHalls() {
  const { name } = useContext(valueContext);
  return (
    <>
      {name === ""
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
              />
            );
          })
        : Records.filter((record) =>
            record.name.toLowerCase().includes(name)
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
              />
            );
          })}
    </>
  );
}
