import { StatusCodes } from 'http-status-codes';
import { MidtransResponse } from 'db/midtrans';
import { apiResponse, notFoundResponse } from 'helpers/api-response';

class midtransService {
    index = async () => {
        try {
            const response = await MidtransResponse.find();
            return apiResponse(StatusCodes.OK, 'OK', 'Success get Midtrans Respose', { midtrans: response });
        } catch (error) {
            console.log(error);
        }
    }

    show = async (orderId: string) => {
        try {
            const response = await MidtransResponse.find({ order_id: orderId });
            if (!response) {
                throw notFoundResponse('Midtrans Response not found');
            }
            return apiResponse(StatusCodes.OK, 'OK', 'Success get Midtrans Response', { midtrans: response });
        } catch (error) {
            console.log(error);
        }
    }
}

export const MidtransService = new midtransService()