const handler = async (req,res)=>{
    console.log("hi thre")
    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`
    const options = {
        method:'GET',
        headers:{
            accept:'application/json',
            Authorization: `Bearer ${process.env.MovieapiKey}`
        }
    }
    const resp = await fetch(url,options)
    const response = await resp.json()
    res.status(200).json(response)
}
export default handler