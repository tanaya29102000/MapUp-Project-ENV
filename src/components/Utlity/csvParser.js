
import Papa from "papaparse";

export const parseCSV = (filePath, callback) => {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      Papa.parse(data, {
        header: true,
        dynamicTyping: true,
        complete: (result) => {
          callback(result.data);
        },
      });
    });
};
