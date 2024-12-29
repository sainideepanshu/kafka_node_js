const { Kafka } = require("kafkajs");

//instantiating the KafkaJS client by pointing it towards at least one broker:

exports.kafka = new Kafka({
  clientId: "my-app",
  brokers: ["<PRIVATE_IP>:9092"],
});