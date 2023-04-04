import { useQuery } from "react-query";
import api from "../../services/request-api";

const useGetSkills = ()=> {
    return useQuery("use-get-skills", () => api.get("/Skills"));
}

export default useGetSkills;