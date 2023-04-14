import { useState, useEffect } from "react";
import styles from "../../styles/Clicks.module.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, setDoc, doc, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfdcvj41fwP1EHO42UCpWvzIGdJ7QjxS4",
  authDomain: "click-counter-00001.firebaseapp.com",
  projectId: "click-counter-00001",
  storageBucket: "click-counter-00001.appspot.com",
  messagingSenderId: "436312245105",
  appId: "1:436312245105:web:efa76b7aa2e360325fecd0",
  measurementId: "G-YX727H3JFB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

function Clicks() {
  const [disabled, setDisabled] = useState(true);
  const [counts, setCounts] = useState([]);
  const [region, setRegion] = useState("");
  const [index, setIndex] = useState(null);

  const sumClicks = counts.reduce((acc, cur) => acc + cur.count, 0);

  // onSnapshot will update itself every time it detects a change in the database
  // data() returns the document data, not the id, so we have to spread doc.data() and add our own custom property
  useEffect(() => {
    onSnapshot(collection(db, "counts"), (snapshot) => {
      setCounts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const handleRegion = (e) => {
    let region = e.target.value;
    switch (region) {
      case "select":
        setRegion("");
        setIndex(null);
        setDisabled(true);
        break;
      case "africa":
        setRegion("africa");
        setIndex(0);
        setDisabled(false);
        break;
      case "antarctica":
        setRegion("antarctica");
        setIndex(1);
        setDisabled(false);
        break;
      case "arctic-circle":
        setRegion("arctic-circle");
        setIndex(2);
        setDisabled(false);
        break;
      case "asia":
        setRegion("asia");
        setIndex(3);
        setDisabled(false);
        break;
      case "europe":
        setRegion("europe");
        setIndex(4);
        setDisabled(false);
        break;
      case "north-america":
        setRegion("north-america");
        setIndex(5);
        setDisabled(false);
        break;
      case "oceania":
        setRegion("oceania");
        setIndex(6);
        setDisabled(false);
        break;
      case "south-america":
        setRegion("south-america");
        setIndex(7);
        setDisabled(false);
        break;
      default:
        return null;
    }
  };

  // TODO: replace the switch case above and handleClick code below with Firestore's increment function

  const handleClick = async () => {
    let currentCount = counts[index].count;
    const docRef = doc(db, "counts", region);
    const payload = { count: currentCount + 1, region: region };
    setDoc(docRef, payload);
  };

  return (
    <div className={styles.container}>
      <h1>{sumClicks}</h1>
      <h2>Clicks Around the World</h2>
      <div className={styles.region}>
        <label>
          Your Region
          <select onChange={handleRegion}>
            <option value="select">select</option>
            <option value="africa">Africa</option>
            <option value="antarctica">Antarctica</option>
            <option value="arctic-circle">Arctic Circle</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="north-america">North America</option>
            <option value="oceania">Oceania</option>
            <option value="south-america">South America</option>
          </select>
        </label>
      </div>
      <button
        className={styles.click}
        disabled={disabled}
        onClick={() => handleClick()}
      >
        Add My Click
      </button>
      <section>
        <h3>Clicks by Region</h3>
        <div className={styles.grid}>
          {counts.map((count) => (
            <div key={count.id}>
              {count.region}: {count.count}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Clicks;
