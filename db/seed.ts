import { db } from "./index";
import { users } from "./schema";
import { createHash, randomBytes, randomUUID } from "crypto";

const main = async () => {
  try {
    console.info("Seeding database");

    await db.insert(users).values([
      {
        id: randomUUID(),
        name: "Patricia Lebsack",
        email: "Julianne.OConner@kory.org",
        salt: randomBytes(16).toString("hex"),
        hash: createHash("sha256")
          .update("randomPassword1234@" + randomBytes(16).toString("hex"))
          .digest("hex"),
      },
      {
        id: randomUUID(),
        name: "Kurtis Weissnat",
        email: "Telly.Hoeger@billy.biz",
        salt: randomBytes(16).toString("hex"),
        hash: createHash("sha256")
          .update("randomPassword1234@" + randomBytes(16).toString("hex"))
          .digest("hex"),
      },
      {
        id: randomUUID(),
        name: "Leanne Graham",
        email: "Sincere@april.biz",
        salt: randomBytes(16).toString("hex"),
        hash: createHash("sha256")
          .update("randomPassword1234@" + randomBytes(16).toString("hex"))
          .digest("hex"),
      },
      {
        id: randomUUID(),
        name: "Ervin Howell",
        email: "Shanna@melissa.tv",
        salt: randomBytes(16).toString("hex"),
        hash: createHash("sha256")
          .update("randomPassword1234@" + randomBytes(16).toString("hex"))
          .digest("hex"),
      },
      {
        id: randomUUID(),
        name: "Clementine Bauch",
        email: "Nathan@yesenia.net",
        salt: randomBytes(16).toString("hex"),
        hash: createHash("sha256")
          .update("randomPassword1234@" + randomBytes(16).toString("hex"))
          .digest("hex"),
      },
    ]);

    console.info("Database Updated");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

main();
