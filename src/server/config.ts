const port = process.env.PORT ?? "8000";
const host = process.env.HOST ?? "0.0.0.0";
const mongodb_uri = process.env.MONGODB_URL ?? "mongodb://localhost:27017/";
const node_env = process.env.NODE_ENV ?? "development";
const db_name = process.env.MONGODB_NAME ?? "local";

//const mongodb_url = mongodb_uri + db_name;
export { port, host, mongodb_uri, node_env, db_name };
