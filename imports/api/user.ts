import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { Accounts } from "meteor/accounts-base";

export interface Profile {
  phone?: string;
  img?: string;
}

export interface User {
  _id?: string;
  username?: string;
  emails?: string;
  createdAt?: Date;
  profile?: Profile;
  services?: object;
}

export const UserCollection = new Mongo.Collection<User>("users");

Meteor.methods({
  "user.login": ({ email, password }) => {
    const user = Accounts.findUserByEmail(email);

    if (!!user) {
      console.log("user exist", user);
      return true;
      // login user
    } else {
      // create user
      Accounts.createUser({
        email,
        password,
      });
    }
  },
  "user.register": ({ email, password }) => {
    const user = Accounts.findUserByEmail(email);
    if (!!user) {
      console.log("user exist", user);
      return true;
      // login user
    } else {
      // create user
      Accounts.createUser({
        email,
        password,
      });
    }
  },
});
