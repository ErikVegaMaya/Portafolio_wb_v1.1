import { useMutation, useQueryClient } from "react-query";
import api from "../../services/request-api";

const postEducation = (data : {}) => {
    return api.post("/Education", data);
}

const useSaveEducation = () => {
    const queryClient = useQueryClient();
    
    return useMutation((data : {}) => postEducation(data), {
        onSuccess : async (response) => {
            console.log("Post Correcto");
            console.log(response);
            queryClient.invalidateQueries("use-get-education");
        }
    });
}

export default useSaveEducation;