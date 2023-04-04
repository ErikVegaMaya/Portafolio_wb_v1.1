import { useQuery } from "react-query";
import api from "../../services/request-api";

const useGetExperiences = () => {
    return useQuery("use-get-experiences", () => api.get("/Experience"));
}

export default useGetExperiences;