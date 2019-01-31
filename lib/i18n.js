class I18n {
  get translations() {
    return {
      en: {
        body: 'There was an update of origin'
      },
      ja: {
        body: '本家のドキュメントに更新がありました'
      }
    }
  }
  get languages() {
    return Object.keys(this.translations)
  }

  constructor (lang=null) {
    this.language = this.languages.includes(lang || process.env.CHETSUMI_LANG) ? (lang || process.env.CHETSUMI_LANG) : 'en'
  }

  _t(key){
    return this.translations[this.language][key]
  }
}

module.exports = I18n
