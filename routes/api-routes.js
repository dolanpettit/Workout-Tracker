const Workout = requestuire("../models/workoutLogic");

module.exports = function (app) {
  app.get("/api/workouts", (request, response) => {
    Workout.find({})
      .then((responseult) => {
        response.json(responseult);
      })
      .catch((err) => {
        response.status(400).json(err);
      });
  });

  app.post("/api/workouts", ({ body }, response) => {
    console.log(body);
    Workout.create(body)
      .then((responseult) => {
        response.json(responseult);
      })
      .catch((err) => {
        response.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", ({ params, body }, response) => {
    Workout.findByIdAndUpdate(
      { _id: params.id },
      { $push: { exercises: [body] } },
      { $inc: { totalDuration: body.duration } }
    )
      .then(() => {
        Workout.findOne({ _id: params.id }).then((responseult) => {
          response.json(responseult);
        });
      })
      .catch((err) => {
        response.status(400).json(err);
      });
  });

  app.get("/api/workouts/range", (request, response) => {
    Workout.find({})
      .then((responseult) => {
        response.json(responseult);
      })
      .catch((err) => {
        response.status(400).json(err);
      });
  });
};
