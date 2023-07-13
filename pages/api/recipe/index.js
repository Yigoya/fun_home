const handler =async(req,res)=>{
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.FoodapiKey}`
    const options = {
        method:'GET',
        headers:{
            accept:'application/json',
            Authorization: 'apiKey efd5a90aa00a4271b5f311ea62b1fec9'
        }
    }
    const resp = await fetch(url)
    const response = await resp.json()
    res.status(200).json(response)

}

export default handler