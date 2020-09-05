import { Meteor } from "meteor/meteor";
import Tasks from "/imports/api/tasks";

function insertTask(task) {
  Tasks.insert({ task, createdAt: new Date() });
}

Meteor.startup(() => {
  if (!Accounts.findUserByUsername("meteorite")) {
    Accounts.createUser({
      username: "sam",
      password: "sam",
    });
  }
  if (Tasks.find().count() === 0) {
    ["First Task", "Second Task", "Third Task", "Fourth Task"].forEach((task) =>
      insertTask(task)
    );
  }
});
