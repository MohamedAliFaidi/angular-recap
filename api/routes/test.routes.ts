import { Request, Response, Router } from 'express';

const router: Router = Router();

router.get("/test", (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "yess !!!" });
    } catch (error) {
        res.status(500).json({ message: "zabb !!!" });
    }
});

export default router;