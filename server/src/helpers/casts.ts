import moment from "moment";

class castsHelpers {
    rupiahFormat = (number: any) => Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);

    castingRuntimeCourse = (course: any) => {
        const durations = course.videos.map((video: any) => {
            runtime: video.runtime;
        })

        const runtimes = durations.reduce((acc: any, curr: any) => (
            acc + moment.duration(curr.runtime).asSeconds()
        ), 0)

        const raw = moment.utc(runtimes * 1000).format('HH:mm:ss')
        const hours = moment.duration(runtimes, 'seconds').hours()
        const minutes = moment.duration(runtimes, 'seconds').minutes()
        const seconds = moment.duration(runtimes, 'seconds').seconds()

        return {
            raw,
            hours,
            minutes,
            seconds
        }
    }

    castingRuntimeVideo = (video: any) => {
        const raw = video.runtime
        const hours = moment.duration(raw, 'seconds').hours()
        const minutes = moment.duration(raw, 'seconds').minutes()
        const seconds = moment.duration(raw, 'seconds').seconds()

        return {
            raw,
            hours,
            minutes,
            seconds
        }
    }
}

export const CastsHelpers = new castsHelpers()