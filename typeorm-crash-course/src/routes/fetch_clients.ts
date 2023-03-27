import express from 'express'
import { Client } from '../entities/Client'
import { createQueryBuilder } from 'typeorm';

const router = express.Router();

router.get('/api/clients', async (req, res) => {
    const client = await createQueryBuilder('tb_clients')
        .select('client.first_name')
        .from(Client, 'client')
        .where('client.id = :clientId', { clientId: 1 })
        .getOne()


    return res.json(client)
})

export { router as fetchClientsRouter }