import { useQuery } from "react-query";
import api from "../../services/request-api";

const useGetResources = ()=> {
    return useQuery("use-get-resources", () => api.get("/Resources"));
}

export default useGetResources;