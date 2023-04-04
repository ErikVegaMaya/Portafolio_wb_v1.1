import { useQuery } from "react-query";
import api from "../../services/request-api";

const useSearchSkill = (id: string) => {
    return useQuery("use-search-skill", () => api.search("/Skills/", id));
}

export default useSearchSkill;