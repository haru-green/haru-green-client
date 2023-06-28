const path = require('path');

const COMMON_EXTENSIONS = '/**/*.{js,jsx,ts,tsx,html}';

module.exports = {
  input: [`src/app${COMMON_EXTENSIONS}`,`./pages${COMMON_EXTENSIONS}`, `./components${COMMON_EXTENSIONS}`, `./stories${COMMON_EXTENSIONS}`],
  options: {
    defaultLng: 'ko',
    lngs: ['ko', 'en', 'ja', 'zh'],
    func: {
      list: ['i18next.t', 'i18n.t', '$i18n.t', 't'],
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.html'],
    },
    resource: {
      loadPath: path.join(__dirname,'src/messages/{{lng}}.json'),
      savePath: path.join(__dirname,'src/messages/{{lng}}.json'),
    },
    defaultValue(lng, ns, key) {
      const keyAsDefaultValue = ['ko'];
      if (keyAsDefaultValue.includes(lng)) {
        const separator = '~~';
        const value = key.includes(separator) ? key.split(separator)[1] : key;

        return value;
      }

      return '';
    },
    keySeparator: false,
    nsSeparator: false,
    prefix: '%{',
    suffix: '}',
  },
};
