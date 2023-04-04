import { useQuery } from "react-query";
import api from "../../services/request-api";

const useSearchEducation = (id : string) => {
    return useQuery(`use-search-education-${id}`, () => api.search("/Education/", id) )
}

export default useSearchEducation;