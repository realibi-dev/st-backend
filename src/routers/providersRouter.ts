import { Router, Request, Response } from 'express';
import prisma from './../prismaClient';
import ProviderProfile from '../../models/ProviderProfile';

const router: Router = Router();

router.get('/', (req: Request, res: Response): void => {
    prisma.providerProfile.findMany()
    .then((data: any): void => {
        res.send(data);
    })
    .catch((error: any): void => {
        res.send(error);
    })
});

router.post('/', (req: Request, res: Response): void => {
    const newProviderProfile = new ProviderProfile(req.body);
    prisma.providerProfile.create({
        data: newProviderProfile,
    })
    .then((): void => {
        console.log("provider profile created", newProviderProfile);
    })
    
    res.status(204).send('ok');
})

export default router;