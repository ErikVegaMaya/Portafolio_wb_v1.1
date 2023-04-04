import { useQuery } from "react-query";
import api from "../../services/request-api";

const useSearchExperience = (id: string) => {
    return useQuery("use-search-experience", () => api.search("/Experience/", id));
}

export default useSearchExperience;