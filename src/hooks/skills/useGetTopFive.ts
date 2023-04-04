import { useQuery } from "react-query";
import api from "../../services/request-api";

const useGetTopFive = () => {
    return useQuery("use-get-top-five", () => api.get("/Skills/topFiveSkills"));
}

export default useGetTopFive;