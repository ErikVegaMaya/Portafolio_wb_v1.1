import { useMutation, useQueryClient } from "react-query";
import api from "../../services/request-api";

const putEducation = (data:any)  => {
    return api.put("/Education", data.idEdu, data)
}

const useUpdateEducation = () => {
    const queryClient = useQueryClient();

    return useMutation( (data : any) => putEducation(data), {
        onSuccess : async (response, variables : any) => {
            queryClient.invalidateQueries(`use-search-education-${variables.idEdu}`);
            console.log(response);
        }
    })
}

export default useUpdateEducation;