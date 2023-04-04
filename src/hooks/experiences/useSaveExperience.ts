import { useMutation, useQueryClient } from "react-query";
import api from "../../services/request-api";

const postExperience = (data : {}) => {
    return api.post("/Experience", data)
}

const useSaveExperience = () => {
    const queryClient = useQueryClient();

    return useMutation((data : {}) => postExperience(data), {
        onSuccess: async (response) => {
            console.log("ok post experince");
            console.log(response);
            queryClient.invalidateQueries("use-get-experiences");
        }
    } )
}

export default useSaveExperience;