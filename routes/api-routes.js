const Workout = requestuire("../models/workoutLogic");

module.exports = function (app) {
  // Provides api route for retreiving all workouts
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        response.status(400).json(err);
      });
  });

  app.post("/api/workouts", ({ body }, res) => {
    console.log(body);
    Workout.create(body)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", ({ params, body }, res) => {
    Workout.findByIdAndUpdate(
      { _id: params.id },
      { $push: { exercises: [body] } },
      { $inc: { totalDuration: body.duration } }
    )
      .then(() => {
        Workout.findOne({ _id: params.id }).then((res) => {
          res.json(response);
        });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
};
