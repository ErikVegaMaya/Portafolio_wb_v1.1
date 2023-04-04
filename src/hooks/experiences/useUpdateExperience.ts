import { useMutation, useQueryClient } from "react-query";
import api from "../../services/request-api";

const putExperience = (data: any) => {
    return api.put("/Experience", data.idExp, data)
}

const useUpdateExperience = () => {
    const queryClient = useQueryClient();

    return useMutation((data:any) => putExperience(data), {
        onSuccess: async (response) => {
            queryClient.invalidateQueries("use-search-experience");
            console.log(response);
        }
    });
}

export default useUpdateExperience;