const Workout = requestuire("../models/workoutLogic");

module.exports = function (app) {
  app.get("/api/workouts", (request, response) => {
    Workout.find({})
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        response.status(400).json(err);
      });
  });

  app.post("/api/workouts", ({ body }, response) => {
    console.log(body);
    Workout.create(body)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", ({ params, body }, response) => {
    Workout.findByIdAndUpdate(
      { _id: params.id },
      { $push: { exercises: [body] } },
      { $inc: { totalDuration: body.duration } }
    )
      .then(() => {
        Workout.findOne({ _id: params.id }).then((response) => {
          res.json(response);
        });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  app.get("/api/workouts/range", (request, response) => {
    Workout.find({})
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
};
