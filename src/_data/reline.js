const axios = require ("axios")

module.export = async () => { 
    try{
        const response =  await axios.get("http://localhost:8055/items/reline?access_token=nurul");
        return response.data;
    } catch(error){
        console.log('error');
    }
};
