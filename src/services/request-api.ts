import axios from "axios";

class AppRequest {
    get = async (url: string) => {
        //console.log(api_url + url);
        return axios.get(api_url + url).catch((error)=>{
            console.log("Error");
            console.log(error);
        });
    };

    post = async (url: string, body = {}) => {
       /*  console.log(api_url + url);
        console.log(body); */
        return axios.post(api_url + url, body);
    }

    search = async (url: string, id: string) => {
       /*  console.log(api_url + url);
        console.log(id); */
        const full_url = api_url + url + id + '/';
        return axios.get(full_url);
    };
    
    delete = async (url: string, id: number | string) => {
        const full_url = api_url + url + '/' + id;
        return axios.delete(full_url );
    };

    put = async (
        url: string, 
        id: number | string, 
        body: {}
    ) => {
        const full_url = api_url + url + '/' + id ;
        return axios.put(full_url, body);      
    };
}

const api_url = "https://localhost:7233/api";
const api = new AppRequest();
export default api;