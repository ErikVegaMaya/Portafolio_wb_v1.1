import { useMutation, useQueryClient } from "react-query";
import api from "../../services/request-api";

const postSkill = (data : {})=> {
    return api.post("/Skills", data);
}

const useSaveSkill = () => {
    const queryClient = useQueryClient();

    return useMutation ( (data: {}) => postSkill(data), {
        onSuccess: async (response) => {
            console.log("ok post skill");
            console.log(response);
            queryClient.invalidateQueries("use-get-skills")
        }
    });

}

export default useSaveSkill;