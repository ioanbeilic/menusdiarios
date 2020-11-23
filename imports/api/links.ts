import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export interface Link {
  _id?: string;
  title: string;
  url: string;
  createdAt: Date;
}

export const LinksCollection = new Mongo.Collection<Link>("links");

if (Meteor.isServer) {
  Meteor.publish("links", () => {
    return LinksCollection.find({});
  });
}

Meteor.methods({
  "links.insert": (data) => {},
});
