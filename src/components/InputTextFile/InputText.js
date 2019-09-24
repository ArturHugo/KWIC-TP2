import React, { useState } from "react";

export default function FileNameForm(props) {
  const [fileName, setFileName] = useState("");

  const readTextFile = fileName => {
    fetch(fileName).then(r => console.log(r.text()));
  };

  const handleSubmit = event => {
    event.preventDefault();
    readTextFile(fileName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        File name:
        <input
          type="text"
          value={fileName}
          onChange={event => setFileName(event.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
