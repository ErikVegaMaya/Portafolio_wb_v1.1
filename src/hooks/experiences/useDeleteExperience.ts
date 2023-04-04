import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import api from "../../services/request-api";

const deleteExperience = (data : any) => {
    return api.delete("/Experience", data.id)
}

const useDeleteExperience = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation( (data : any) => deleteExperience(data), {
        onSuccess : async (response, variables ) =>{
            queryClient.invalidateQueries("use-get-experiences");
            queryClient.invalidateQueries("use-search-experience");
            variables.sf === "2" && navigate("/experiences"); 
            console.log(response);
        }
    } )
}

export default useDeleteExperience;