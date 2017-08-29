import Vue from 'vue'

export default{
	fetchUserInfo(){
		return Vue.http.get('https://yesno.wtf/api');
	}
}