const { kafka } = require("./client");
const group = process.argv[2]; // node consumer.js <GROUP_NAME>

async function init() {
  const consumer = kafka.consumer({ groupId: group });  
  await consumer.connect();

  await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(
        `${group}: [${topic}]: PARTITION:${partition}:`,
        message.value.toString()
      );
    },
  });

  // here we are not disconnecting the consumer

}

init(); 