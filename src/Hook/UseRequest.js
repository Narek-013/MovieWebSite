export const UseRequest = () => {

    const getMovie = async(url) => {
        const get = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTNmYzhjYWM1Yzg5MDZlMGM5ZGQ0ZDg1MWU0NDBiZSIsInN1YiI6IjY1ZGE0MjYwMTM2NTQ1MDE3Y2QyYmM1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sYZRxC_4yoSm8JhdfSbknzqKqzLT_tWg7px38MiG_Ow"
          },
        });
        const result = await get.json()
        return result.results
    }

    return {getMovie}
}