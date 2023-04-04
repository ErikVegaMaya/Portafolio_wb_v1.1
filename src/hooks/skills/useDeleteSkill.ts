import { useMutation, useQueryClient } from "react-query";
import api from "../../services/request-api";

const deleteSkill = (id: string | number) => {
    return api.delete("/Skills", id);
}

const useDeleteSkill = ()=> {
    const queryClient = useQueryClient();

    return useMutation((id: string | number)=> deleteSkill(id), {
        onSuccess : () => {
            queryClient.invalidateQueries("use-get-skills");
            queryClient.invalidateQueries("use-search-skill");
        } 
    });
}

export default useDeleteSkill;