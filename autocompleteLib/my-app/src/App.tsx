import React from "react";
import { Autocomplete } from "./Componets/Autocomplete";
import axios from "axios";

interface APIDataItem {
  name: string;
}

interface APIData {
  data: APIDataItem[];
}

export default function App() {
  async function getData(searchQuery: string): Promise<string[]> {
    const { data }: APIData = await axios.get(
      "https://autocomplete.travelpayouts.com/places2?locale=en&types[]=country",
      {
        params: {
          term: searchQuery,
        },
      }
    );
    console.log(data);

    return data.map((data) => data.name);
  }

  return (
    <div className="App">
      <h1>Autocomplete Input </h1>
      <Autocomplete getData={getData} />
    </div>
  );
}
