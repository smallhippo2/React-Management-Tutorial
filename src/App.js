import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://picsum.photos/seed/64/64",
    name: "hong",
    birthday: "960305",
    gender: "male",
    job: "programer",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/64/64",
    name: "kim",
    birthday: "960305",
    gender: "male",
    job: "programer",
  },
  {
    id: 3,
    image: "https://picsum.photos/64/64",
    name: "hee",
    birthday: "960305",
    gender: "female",
    job: "programer",
  },
];

function App() {
  return (
    <div className="gray-background">
      {customers.map((item) => {
        return (
          <Customer
            id={item.id}
            image={item.image}
            name={item.name}
            birthday={item.birthday}
            gender={item.gender}
            job={item.job}
          ></Customer>
        );
      })}
    </div>
  );
}

export default App;
