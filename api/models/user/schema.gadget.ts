import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://freshtrack.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "CEOuTPBOrAJB",
  fields: {
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "80qbcT-B7Q2g",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "_YL5yU7ILjKm",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "qaNZPt2GnzfO",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "1VQXgjWtiYin",
    },
    firstName: { type: "string", storageKey: "D0AUeTOxv3MO" },
    googleImageUrl: { type: "url", storageKey: "RHNZR6VoX3fY" },
    googleProfileId: { type: "string", storageKey: "dNFEy6Svktod" },
    lastName: { type: "string", storageKey: "_bA3kzPkMjjx" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "OCDUv0mFSINQ",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "ZRMrHGYwxzid",
    },
    profilePicture: {
      type: "file",
      allowPublicAccess: true,
      storageKey: "_Ncu8G6zvIjS",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "iMXJ0uFgoZGA",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "ZKxFHZ297FTz",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "YUMxDxX0qmXu",
    },
  },
};
