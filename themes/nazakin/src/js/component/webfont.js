/// Webフォントの読み込み
import WebFont from 'webfontloader';
import loading from 'component/loading'

WebFont.load({
    custom: {
        families: [
            "Noto Sans Japanese",
            "Noto Serif"
        ],
        urls: [
            "https://fonts.googleapis.com/earlyaccess/notosansjapanese.css",
            "https://fonts.googleapis.com/css?family=Noto+Serif",
        ],
    },
    timeout: 3000,
    loading: () => {
        //
    },
    active: () => {
        // 
        loading();
    },
    inactive: () => {
        // 
    },
    fontloading: (fontFamily, fontDescription) => {
        // 
    },
    fontactive: (fontFamily, fontDescription) => {
        // 
    },
    fontinactive: (fontFamily, fontDescription) => {
        // 
    }
});