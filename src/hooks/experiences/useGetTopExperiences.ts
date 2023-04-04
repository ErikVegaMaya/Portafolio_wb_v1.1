import { useQuery } from "react-query";
import api from "../../services/request-api";

const useGetTopExperiences = () => {
    return useQuery("use-get-top-experiences", () => api.get("/Experience/topTreeExperiences"));
}

export default useGetTopExperiences;