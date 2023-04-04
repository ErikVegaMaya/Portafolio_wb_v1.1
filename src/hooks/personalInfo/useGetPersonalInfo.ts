import { useQuery } from 'react-query';
import api from '../../services/request-api';

const useGetPersonalInfo = () => {
    return useQuery("use-get-personal-info", () => api.get("/PersonalInfo/getPersonalInfo"));
}

export default useGetPersonalInfo;
