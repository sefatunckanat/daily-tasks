import Vue from 'vue'

export default{
	fetchUserInfo(){
		return Vue.http.get('http://localhost:80/api.php');
	}
}