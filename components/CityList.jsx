import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../src/context/CitiesProvider";

function CityList() {
  const { cities, Loading } = useCities();
  if (Loading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map " />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
