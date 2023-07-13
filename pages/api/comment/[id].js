const handler = async ({query:{ id }},res) =>{
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`
    const options = {
        method:'GET',
        headers:{
            accept:'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGEzZTdhMzBjMDVkMjg5YTA4YTczNGZjMjZkZWJkZiIsInN1YiI6IjY0OGIxNWQ3YzJmZjNkMDBmZmI5YTM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2CzvPqV9MPirRHF6T7a756wSU0zblcm8QvHoDh5-igI'
        }
    }
    const resp = await fetch(url,options)
    const response = await resp.json()
    res.status(200).json(response)
    

}
export default handler