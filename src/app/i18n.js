const langList = ['tr']
const messages = {
    en: {
	  	message: {
  	  		hello: 'Hello VUE'
	  	}
    },
    tr: {
	  	message: {
  	  		hello: 'Selam VUE'
	  	}
    }
}

const locale = langList.indexOf(navigator.language) != -1 ? navigator.language : 'en';

export default{
	locale: locale,
	messages
}