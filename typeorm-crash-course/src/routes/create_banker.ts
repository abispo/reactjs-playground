import express from "express";
import { Banker } from "../entities/Banker";
import camelcaseKeys from 'camelcase-keys';

const router = express.Router();

router.post('/api/banker', async (req, res) => {

    const requestData = camelcaseKeys(req.body)

    const {
        firstName,
        lastName,
        email,
        cardNumber,
        employeeNumber,
        balance
    } = requestData;

    const banker = Banker.create({
        first_name: firstName,
        last_name: lastName,
        email,
        card_number: cardNumber,
        employee_number: employeeNumber,
        balance
    });

    await banker.save()

    return res.json(banker)
    
});

export {
    router as createBankerRouter
}