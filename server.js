const app = require('./app');

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening at port: ${port}.....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
