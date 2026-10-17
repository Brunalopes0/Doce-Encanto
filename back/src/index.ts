import fastify from "fastify";
import mysql from "mysql2/promise";
import fastifyCors from "@fastify/cors";
import "dotenv/config";

const server = fastify({ logger: true });

server.register(fastifyCors, {
    origin: "*"
});



const banco = await mysql.createConnection({
    host: process.env.DB_HOST!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    port: Number(process.env.DB_PORT)
});



server.get("/doces", async (req, res) => {
    res.type("application/json").code(200);

    const [doces] = await banco.query(
        "SELECT * FROM doces"
    );

    return doces;
});

server.get("/doces/:sabor", async(req, res) => {
    const { sabor } = req.params as { sabor: string }
    const [doces] = await banco.query(
        "SELECT * FROM doces WHERE sabor =? ",
        [sabor]
    );
    return doces;
})


const port = Number(process.env.PORT) || 3000;

server.listen({ port, host: "0.0.0.0" }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Servidor iniciado na porta ${port}`);
});
