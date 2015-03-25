import i18en from './en-en'
import i18ru from './ru-ru'

var localized;
if (window.navigator.language && window.navigator.language.match(/ru/)) {
  localized = i18ru;
} else {
  localized = i18en
}

export default localized;