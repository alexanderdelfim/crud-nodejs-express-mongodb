const app = require("./app");

const listener = app.listen(3001, () => {
  console.log(`Server started on port ${listener.address().port}!`);
});
