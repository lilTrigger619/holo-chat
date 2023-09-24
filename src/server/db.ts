import {MongoClient } from "mongodb";

import {mongodb_uri, db_name} from "./config";

let connectedClient;

export const connectClient = async()=>{
	if (connectedClient) return connectedClient.db(db_name);
	const client = new MongoClient(mongodb_uri);
	await client.connect()
	await client.db(db_name).command({ping:1});
	console.info("Connected to MongoDB");

	connectedClient = client;

	return client.db(db_name);
};

export const stopClient = async ()=>{
	await connectedClient?.close();
};
