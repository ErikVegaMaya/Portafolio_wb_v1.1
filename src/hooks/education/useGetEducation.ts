import { useQuery } from "react-query";
import api from "../../services/request-api";

const useGetEducation = () => {
    return useQuery("use-get-education", () => api.get("/Education"))
}

export default useGetEducation;