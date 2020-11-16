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
    let userExist: boolean;

    const user = Accounts.findUserByEmail(email);

    userExist = !!user;

    if (userExist) {
      console.log("user exist", user);
    } else {
      // create user
    }
  },
});
