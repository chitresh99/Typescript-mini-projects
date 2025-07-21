import express from "express";
import { Client } from "pg";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
const connectionstring = process.env.NEON_DB;

const pgclient = new Client({ connectionString: connectionstring });

(async () => {
    try {
        await pgclient.connect();
        console.log("Connected to PostgreSQL");
    } catch (err) {
        console.error("Failed to connect to PostgreSQL", err);
        process.exit(1);
    }
})();

let capital = 1_000_000; 

app.post("/tradeplace", async (req, res) => {
    const { stockname, amount, price_per_share, quantity_of_shares } = req.body;
    const totalamount = Number(quantity_of_shares) * Number(price_per_share);
    
    if (totalamount > capital) {
        return res.status(400).json({ message: "Insufficient capital" });
    }

    capital -= totalamount;

    try {
        const insertquery = `
            INSERT INTO users (stockname, amount, price_per_share, quantity_of_shares, capitalspent)
            VALUES ($1, $2, $3, $4, $5)
        `;
        await pgclient.query(insertquery, [
            stockname,
            amount,
            price_per_share,
            quantity_of_shares,
            totalamount
        ]);

        res.json({ message: "Details registered", remaining_capital: capital });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Error while registering details" });
    }
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
