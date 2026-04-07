const fs = require("fs");

const fileName = "sample.txt";

// 1. Create & Write file
fs.writeFile(fileName, "Hello, this is the initial content.\n", (err) => {
  if (err) {
    console.log("Error creating file:", err);
    return;
  }
  console.log("File created and written successfully.");

  // 2. Read file
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }
    console.log("File content:\n", data);

    // 3. Append data
    fs.appendFile(fileName, "This is appended content.\n", (err) => {
      if (err) {
        console.log("Error appending file:", err);
        return;
      }
      console.log("Data appended successfully.");

      // 4. Read again after append
      fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
          console.log("Error reading file:", err);
          return;
        }
        console.log("Updated content:\n", data);

        // 5. Delete file
        fs.unlink(fileName, (err) => {
          if (err) {
            console.log("Error deleting file:", err);
            return;
          }
          console.log("File deleted successfully.");
        });
      });
    });
  });
});
