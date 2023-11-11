import { CartModel } from "db/cart";
// import { CourseModel } from "db/courses";
// import User

export const index = () => CartModel.find();

export const show = (id: string) => CartModel.findById(id)

export const addItem = async (values: Record<string, any>) => new CartModel(values)
    .save()
    .then((item) => {
        item.toObject();
    })

export const removeItem = async (itemId: string) => CartModel.findByIdAndRemove(
    { '_id': itemId }
)




// import { StatusCodes } from "http-status-codes";
// import { getUserById } from "services/users";
// import { RequestWithJWT } from "middlewares";
// // import { CourseModel } from "db/course";
// import { apiResponse, notFoundResponse, badRequestResponse } from "helpers/api-response";
// import { CartSummaryHelpers } from "helpers/cart";
// import { CourseCartHelpers } from "helpers/course";

// class cartService {
//     index = async (req: RequestWithJWT) => {
//         try {
//             const user = await getUserById(req.userId);
//             if (!user) {
//                 throw notFoundResponse('User');
//             }

//             // wtf is this
//             const carts = await user.getCarts({ // WTF is this
//                 include: [{
//                     association: 'course',
//                 }],
//             })

//             const cartSummary = CartSummaryHelpers(carts)
//             const cartIds = carts.map((cart: any) => cart.id)
//             const cartCourse = carts.map((cart: any) => CourseCartHelpers(cart))

//             return apiResponse(StatusCodes.OK, 'OK', 'Success get carts', {
//                 cart_summary: cartSummary,
//                 cart_ids: cartIds,
//                 cart_course: cartCourse,
//             })
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     addOrRemove = async (req: any) => {
//         try {
//             const courseId = await CourseModel.findById(req)    // wtf is this
//             const course = await CourseModel.findById(courseId)
//             if (!course) throw notFoundResponse('Course')
//             if (course.is_free || course.price === null) throw badRequestResponse('Cannot add free courses to cart')

//             const user = await User.findByPk(id)    // wtf
//             if (!user) throw notFoundResponse('User')
//             if (await user.hasCourse(course)) throw badRequestResponse('You already bought this course')

//             const courseInCart = await user.getCarts({
//                 where: {
//                     course_id: course.id;
//                 }
//             })
            
//             if (courseInCart.length) {
//                 await courseInCart[0].destroy();
//                 return apiResponse(StatusCodes.OK, 'OK', 'Success remove course from cart', courseInCart);
//             }

//             await user.createCart({ course_id: course.id})

//             return apiResponse(StatusCodes.OK, 'OK', 'Success add courses to carts', courseInCart)
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

// export const CartService = new cartService()