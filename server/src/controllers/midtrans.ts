import { MidtransService } from "./midtrans-service";

class midtransController {
    index = async (res: any) => {
        try {
            const serviceResponse = await MidtransService.index();
            res.status(serviceResponse.code).json(serviceResponse);
        } catch (error) {
            return res.status(error.code).json(error);
        }
    }

    show = async (req: any, res: any) => {
        try {
            const serviceResponse = await MidtransService.show(req.params.order_id);
            res.status(serviceResponse.code).json(serviceResponse);
        } catch (error) {
            return res.status(error.code).json(error);
        }
    }
}

export const MidtransController = new midtransController()