import "dotenv/config";

export const config = {
  PORT: process.env.PORT,
  WRITE_DATABASE: process.env.WRITE_DATABASE,
  WRITE_HOST: process.env.WRITE_HOST,
  WRITE_PORT: parseInt(String(process.env.WRITE_PORT)),
  WRITE_USERNAME: process.env.WRITE_USERNAME,
  WRITE_PASSWORD: process.env.WRITE_PASSWORD,
  WRITE_TYPE_DATABASE: String(process.env.WRITE_TYPE_DATABASE),
  WRITE_LOGGING: process.env.WRITE_LOGGING == "true",
  WRITE_HOST_MIGRATION: process.env.WRITE_HOST_MIGRATION,

  READ_DATABASE: process.env.READ_DATABASE,
  READ_HOST: process.env.READ_HOST,
  READ_PORT: parseInt(String(process.env.READ_PORT)),
  READ_USERNAME: process.env.READ_USERNAME,
  READ_PASSWORD: process.env.READ_PASSWORD,
  READ_TYPE_DATABASE: String(process.env.READ_TYPE_DATABASE),
  READ_LOGGING: process.env.READ_LOGGING == "true",
  READ_HOST_MIGRATION: process.env.READ_HOST_MIGRATION,

  RABBITMQ_VHOST: process.env.RABBITMQ_VHOST,
  RABBITMQ_HOST: process.env.RABBITMQ_HOST,
  RABBITMQ_USERNAME: process.env.RABBITMQ_USERNAME,
  RABBITMQ_PASSWORD: process.env.RABBITMQ_PASSWORD
};