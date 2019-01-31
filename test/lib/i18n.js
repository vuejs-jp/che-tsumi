const assert = require('assert')
const I18n = require('../../lib/i18n')

describe('i18n', function () {
  describe('_t()', function() {
    it('returns translated text', function () {
      const i18n = new I18n('ja')
      assert(i18n._t('body') === '本家のドキュメントに更新がありました')
    })
  })
})
