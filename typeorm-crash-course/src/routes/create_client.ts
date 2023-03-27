import express from "express";
import { Client } from "../entities/Client";
import camelcaseKeys from "camelcase-keys";

const router = express.Router();

router.post('/api/client', async (req, res) => {

    const requestData = camelcaseKeys(req.body)

    const {
        firstName,
        lastName,
        email,
        cardNumber,
        balance
    } = requestData;

    const client = Client.create({
        first_name: firstName,
        last_name: lastName,
        email,
        card_number: cardNumber,
        balance
    });

    await client.save();

    return res.json(client)
    
});

export {
    router as createClientRouter
}