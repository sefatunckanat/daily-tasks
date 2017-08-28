import service from './service.js'
const state = {
	userInfo:[]
}

const getters = {
	userInfo(state){
		return state.userInfo;
	}
}

const mutations = {
	setUserInfo(state,data){
		state.userInfo = data;
	}
}

const actions = {
	getUserInfo(context){
		return service.fetchUserInfo().then((res)=>{
			if(res.status == 200){
				context.commit("setUserInfo",res.body)
			}
		});
	}
}

export default{
	state,
	getters,
	mutations,
	actions
}