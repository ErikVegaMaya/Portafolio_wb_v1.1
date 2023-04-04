import { useMutation, useQueryClient } from "react-query";
import api from "../../services/request-api";

const putSkill = (data: any) => {
    return api.put("/Skills", data.idSkill, data);
}

const useUpdateSkill = () => {
    const queryClient = useQueryClient();

    return useMutation((data) => putSkill(data), {
        onSuccess: async (response) => {
            queryClient.invalidateQueries("use-search-skill")
        }
    });
}

export default useUpdateSkill;