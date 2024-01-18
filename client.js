const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
    clientId: "kafka-model",
    brokers: ["10.10.11.173:9092"],
  });