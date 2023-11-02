import { CourseService } from "services/course";

class courseController {
    index = async (res: any) => {
        try {
            const serviceResponse = await CourseService.index()
            return res.status(serviceResponse.code).json=(serviceResponse)
        } catch (error) {
            console.log(error);
            
        }
    }

    show = async (req: any, res: any) => {
        try {
            const serviceResponse = await CourseService.show(req.params)
            return res.status(serviceResponse.code).json=(serviceResponse)
        } catch (error) {
            console.log(error);
            
        }
    }
}

export const CourseController = new courseController()