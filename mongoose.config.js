
export default (mongoose) => {

  let gracefulExit = function() {

    mongoose.connection.close(() => {
      console.log(`Mongoose connection has disconnected through app termination`);
      process.exit(0);
    });
  };

  mongoose.connection.on("connected", (ref) => {

    console.log(`Successfully connected to database on startup `);
  });


  mongoose.connection.on("error", (err) => {

    console.error(`Failed to connect to database on startup `, err);
  });

  mongoose.connection.on('disconnected', () => {

    console.log(`Mongoose default connection to database disconnected`);
  });

  process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

  mongoose.connect('mongodb://localhost/testAPI', (error) => {
    if (error)
      throw error;
  });
};
