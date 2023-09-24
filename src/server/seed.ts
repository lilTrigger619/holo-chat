import { connectClient, stopClient } from "./db";

async function main() {
  const client = await connectClient();
  await client.collection("chat").deleteMany({});

  const resp = await client.collection("chat").insertMany([
    {
      id: "someid",
      name: "test name",
      message: "holla",
    },
  ]);
	console.log("resp", resp);

	await stopClient();
}

main();
