import { Cart } from "db/cart";
import { CastsHelpers } from "./casts";
import { VideoHelpers } from "./video";

const objCourse = (course: any) => ({
    id: course.id,
    title: course.title,
    slug: course.slug,
    description: course.description,
    price: {
        raw: course.price,
        formatted: course.price && CastsHelpers.rupiahFormat(course.price)
    },
    discount_price: {
        raw: course.discount_price,
        formatted: course.price && CastsHelpers.rupiahFormat(course.discount_price)
    },
    preview_course: course.preview_course,
    source_code: course.source_code,
    is_discount: course.is_discount,
    is_free: course.is_free,
    created_at: course.created_at
})

const hasPurchased = async (course: any, user: any) => {
    if (!user) {
        return false
    }

    return !!(await course.hasUser(user.id))
}

const isExistInCart = async (course: any, user: any) => {
    if (!user) {
        return false
    }

    return !!(await Cart.count({
        where: {
            course_id: course.id,
            user_id: user.id,
        }
    }))
}

export const CourseHelpers = (course: any) => ({
    ...objCourse(course),
    runtime: CastsHelpers.castingRuntimeCourse(course),
})

export const CourseShowHelpers = async (course: any, user: any) => ({
    ...objCourse(course),
    runtime: CastsHelpers.castingRuntimeCourse(course),
    videos: course.videos.map((video: any) => {
        const objVideo = VideoHelpers(video);
        delete objVideo.source;

        return objVideo
    }),
    viewing_status: {
        is_free: course.is_free,
        has_purchased: await hasPurchased(course, user),
        is_exists_in_cart: await isExistInCart(course, user),
        is_discount: course.is_discount,
    },
})

export const CourseCartHelpers = (course: any) => {
    const courseObj = objCourse(course);
    delete courseObj.description;
    delete courseObj.preview_course;
    delete courseObj.source_code;
    delete courseObj.is_free;
    delete courseObj.created_at;

    return courseObj;
}