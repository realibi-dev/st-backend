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

router.post('/registration', async (req: Request, res: Response): Promise<void> => {
    const newUser = new User(req.body);

    try {
        const existingUser = await prisma.user.findFirst({
            where: {
                username: newUser.username,
            },
        });

        if (existingUser) {
            res.status(400).json({ message: "Username already exists" });
        }

        await prisma.user.create({
            data: newUser,
        })

        console.log("user created", newUser);
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})

export default router;