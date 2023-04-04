import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import api from "../../services/request-api";

const deleteEducation = (data: any) => {
    return api.delete("/Education", data.id)
}

const useDeleteEducation = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();


    return useMutation((data: any) => deleteEducation(data), {
        onSuccess : async (response, variables: any) => {
            queryClient.invalidateQueries(`use-search-education-${variables.id}`);
            queryClient.invalidateQueries("use-get-education");
            variables.sf === "2" && navigate("/education"); 
            console.log(response);
        }
    })
}

export default useDeleteEducation;