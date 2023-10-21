import { Response, Request } from "express";

const BUNNY_API_KEY = '2b2cd13b-11de-46af-819ea1ba1560-1afe-4a0f'
const LIBRARY_ID = '160654'
const CDN_HOSTNAME = 'https:///video.bunnycdn.com'

export const getAllVideos = async (req: Request, res: Response) => {
  const url = `${CDN_HOSTNAME}/library/${LIBRARY_ID}/videos?page=1&itemsPerPage=100&orderBy=date`
  const options: RequestInit = {
    method: 'GET', 
    headers: {
      accept: 'application/json',
      'AccessKey': `${BUNNY_API_KEY}`
    }};

  await fetch(url, options)
    .then(res => res.json())
    .then(json => res.status(200).send(json))
    .catch(err => res.status(400).send(err))
}
