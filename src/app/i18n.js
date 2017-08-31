const languageList = ['tr']
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

const localeString = languageList.indexOf(navigator.language) != -1 ? navigator.language : 'en';

export default{
	locale: localeString,
	fallbackLocale: 'en',
	messages
}