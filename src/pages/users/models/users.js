import * as usersService from '../services/users';

export default {
    namespace:"users",
    state:{
        list:[],
        total:null,
        page:0,
        loading:false
    },
    reducers:{
        save(state,{payload:{data:list,total,page,loading}}){
            console.log(list,total,page);
            return {...state,list,total,page,loading};
        },
        setLoading(state,{payload:{loading}}){
            return {...state,loading};
        }
    },
    effects: {
        *fetch({ payload: { page } }, { call, put }) {
            yield put({type:'setLoading',payload:{loading:true}});
            const {data:{list}} = yield call(usersService.fetch, { page });
            console.log('fetch',list);
            
            yield put({ type: 'save',payload: {data:list,total:5,page:1,loading:false }});
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                console.log(pathname);
                if (pathname === '/users') {
                    dispatch({ type: 'fetch', payload: query });
                }
            });
        },
    },
}