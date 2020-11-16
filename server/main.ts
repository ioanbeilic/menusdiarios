import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";

const SEED_EMAIL = "ioan@test.com";
const SEED_PASSWORD = "password";

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  const user = Meteor.users.findOne({ email: SEED_EMAIL });

  if (!!user) {
    Accounts.createUser({
      email: SEED_EMAIL,
      password: SEED_PASSWORD,
    });
  }
});
