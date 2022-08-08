import { useState } from "react";
import "./styles.css";

export default function App() {
  const [places, setPlaces] = useState("Bangalore");

  const listOfplaces = {
    Bangalore: [
      {
        name: "Idli-Dosas",
        location: "Ranga Rao Road, Basavanagudi",
        rating: "5/5"
      },
      {
        name: "Shawarmas",
        location: "Fraser Town and Richmond Road",
        rating: "4.5/5"
      },
      {
        name: "Bhel Puri",
        location: "Basavanagudi, Jayanagar and Vijay Nagar",
        rating: "4/5"
      },
      {
        name: " Pani Puri",
        location: "Silver Springs Layout, Marathahalli",
        rating: "4/5"
      }
    ],

    Hyderabad: [
      {
        name: "Hyderabadi Biryani",
        location: "Hotel Shah Ghouse, Grand Trunk Road",
        rating: "5/5"
      },
      {
        name: "Momos Point",
        location: "Balaji Arcade, Studio 11, Street 8",
        rating: "4.5/5"
      },
      {
        name: "samosa",
        location: "Old Mumbai Road, Beside HDFC Bank, Indira Nagar",
        rating: "4/5"
      },
      {
        name: " Egg Noodels",
        location:
          "Beside Sri Chaitanya Junior College, Near Flyover, Street 14",
        rating: "4/5"
      }
    ],

    Baroda: [
      {
        name: "Kulfi",
        location:
          "Rajasthan Kulfi House which is situated in the Ambedkar Circle area of Alkapuri",
        rating: "5/5"
      },
      {
        name: "Sev Usal",
        location: "Prathamesh Plaza (behind Nehru Bhavan) on Palace Road",
        rating: "4.5/5"
      },
      {
        name: "Kachori",
        location: "Sukhadia Khambhatwala Sweets and Snacks in Alkapuri.",
        rating: "4/5"
      },
      {
        name: " Pav Bhaji",
        location: "Nizampura Main Rd, Giriraj Society, Swaminarayan Nagar",
        rating: "4/5"
      }
    ],
    Goa: [
      {
        name: "Frankies",
        location: "North Goa",
        rating: "5/5"
      },
      {
        name: "Ros Omellete",
        location: "North Goa",
        rating: "4.5/5"
      },
      {
        name: "Gadbad Ice-Cream",
        location: "North Goa",
        rating: "4/5"
      },
      {
        name: "Croquettes",
        location: "North Goa",
        rating: "3/5"
      }
    ]
  };

  const clickHandler = function (suggestions) {
    setPlaces(suggestions);
  };

  const favPlaces = Object.keys(listOfplaces);

  return (
    <div className="App">
      <h1>🧑‍🍳🥪 Street Foods Recommendations 🍳🧑‍🍳</h1>
      <p>
        Check out my favourite foods to taste. Select the cities to get started.
      </p>

      <div>
        {favPlaces.map((suggestions) => (
          <button onClick={() => clickHandler(suggestions)}>
            {suggestions}
          </button>
        ))}
        <hr></hr>
      </div>

      <div>
        {listOfplaces[places].map((travelPlaces) => (
          <li className="output_list">
            <div>
              Food Name : <span>{travelPlaces.name}</span>
            </div>
            <div>
              Location : <span>{travelPlaces.location}</span>
            </div>
            <div>
              Rating : <span>{travelPlaces.rating}</span>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
