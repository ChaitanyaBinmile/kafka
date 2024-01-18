const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("admin connnecting ...");
  admin.connect();
  console.log("admin connection successful");

  console.log("Creating Topic [rider-updates]");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-status",
        numPartitions: 2,
      },
    ],
  });
  console.log("topics created success [rider-updates]");

  console.log("disconnecting admin ..")
  await admin.disconnect();
}

init();