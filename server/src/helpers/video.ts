import { CastsHelpers } from "./casts";

const objVideo = (video: any, hasPurchased: any) => {
    let source = video.is_free ? video.source : null

    if (hasPurchased) {
        source = video.source
    }

    return {
        id: video.id,
        title: video.title, source,
        runtime: CastsHelpers.castingRuntimeVideo(video),
        created_at: video.created_at
    }
}

export const VideoHelpers = (video: any, hasPurchased = false) => objVideo(video, hasPurchased)