import { Router, Request, Response } from 'express';
import prisma from './../prismaClient';
import Category from '../../models/Category';

const router: Router = Router();

router.get('/', (req: Request, res: Response): void => {
    prisma.category.findMany()
    .then((data: any): void => {
        res.send(data);
    })
    .catch((error: any): void => {
        res.send(error);
    })
});

router.post('/', (req: Request, res: Response): void => {
    const newCategory = new Category(req.body);
    prisma.category.create({
        data: newCategory,
    })
    .then((): void => {
        console.log("category created", newCategory);
    })
    
    res.status(204).send('ok');
})

export default router;