import requets from '../../../utils/request';

export function fetch({page = 1}){
    return requets(`api/v1.0.0/users?page?${page}&_limit=5`);
}