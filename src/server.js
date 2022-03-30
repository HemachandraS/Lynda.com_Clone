const app = require("./index");

const connect = require("./configs/db");

app.listen(5700, async () => {
  try {
    await connect();
    console.log("listening port 5700");
  } catch (error) {
    console.log(error.message);
  }
});
