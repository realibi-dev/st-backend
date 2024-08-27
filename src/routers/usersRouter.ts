import { Router, Request, Response } from 'express';
import prisma from './../prismaClient';
import User from '../../models/User';

const router: Router = Router();

router.get('/', (req: Request, res: Response): void => {
    prisma.user.findMany()
    .then((data: any): void => {
        res.send(data);
    })
    .catch((error: any): void => {
        res.send(error);
    })
});

router.post('/', (req: Request, res: Response): void => {
    const newUser = new User(req.body);
    prisma.user.create({
        data: newUser,
    })
    .then((): void => {
        console.log("user created", newUser);
    })
    
    res.status(204).send('ok');
})

export default router;