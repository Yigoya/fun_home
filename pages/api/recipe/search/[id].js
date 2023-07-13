const handler =async({ query: { id } },res)=>{
    console.log(id)
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.FoodapiKey}&query=${id}&maxFat=25&number=2`
    const options = {
        method:'GET',
        headers:{
            accept:'application/json',
            Authorization: 'apiKey efd5a90aa00a4271b5f311ea62b1fec9'
        }
    }
    const resp = await fetch(url,options)
    const response = await resp.json()
    res.status(200).json(response)

}

export default handler