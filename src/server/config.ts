const port = process.env.PORT ?? "8000";
const host = process.env.HOST ?? "0.0.0.0";
const mongodb_url = process.env.MONGODB_URI ?? "mongodb://localhost:27017";
const node_env = process.env.NODE_ENV ?? "development";

export {
  port,
  host,
  mongodb_url,
  node_env,
};
