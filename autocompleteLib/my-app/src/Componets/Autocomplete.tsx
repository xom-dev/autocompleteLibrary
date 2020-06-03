import React, { useState } from "react";

interface Props {
  getData: (term: string) => Promise<string[]>;
}

export const Autocomplete = ({ getData }: Props) => {
  const [data, setData] = React.useState<string[]>([]);
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  React.useEffect(() => {
    async function fetchData() {
      if (searchTerm === "") return;
      const apiData = await getData(searchTerm);
      setData(apiData);
    }

    fetchData();
  }, [searchTerm, getData]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {data && data.map((item) => <div key={item}>{item}</div>)}
    </div>
  );
};
