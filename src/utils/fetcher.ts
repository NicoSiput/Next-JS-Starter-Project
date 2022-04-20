import axios from 'axios'

export const fetcher = (...args) => {
  switch (args.length) {
    case 2:
      console.log(args)
      console.log('CASE 2')
      return axios
        .get(args[0], {
          headers: {
            Authorization: 'Bearer ' + args[1],
          },
        })
        .then(({ data }: any) => data.data)

    case 1:
      console.log(args)
      console.log('CASE 1')
      return axios(args[0]).then(
        ({ data }: any) => data.data
      )

    default:
      return null
  }
}

export const youtubeFetcher = (...args) => {
  return axios(args[0]).then(({ data }) => data)
}
