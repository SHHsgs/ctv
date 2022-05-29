const textView = document.getElementById("textView")
const defaultText = "入力したテキストがここに表示されます"

// クエリからデフォルト文字を入力&viewに反映
setDefaultText()

function setDefaultText() {
    // クエリストリングからtextパラメータの値を取得
    let queryText = decodeURI(
        location.search
            .split("&")
            .find(param => param.indexOf("text"))
            .split("=")[1]
    )
    // 入力枠に反映
    document.getElementById("textInput").value = queryText
    // この方法ではイベントが発火しないのでviewも手動反映
    textView.innerText = queryText != "" ? queryText : defaultText
}

function inputChange() {
    let textInput = document.getElementById("textInput")
    textView.innerText = textInput.value != "" ? textInput.value : defaultText
}

function applyStyleEvent() {
    let additionalStyleText = document.getElementById("styleInput").value
    let additionalStyleMap = parseStyleToMap(additionalStyleText)
    applyStyle(additionalStyleMap)
}

/**
 * 改行込みのスタイルをMapのリスト形式にする
 * @param {String} additionalStyleText 
 * @returns スタイル毎のMap
 */
function parseStyleToMap(additionalStyleText) {
    let styleMap = new Map
    additionalStyleText.split(/;|\n/).forEach( singleStyle => {
        // 空白を削除
        let formattedSingleStyle = singleStyle.replace(" ", "")
        let styleName = formattedSingleStyle.split(":")[0]
        let styleValue = formattedSingleStyle.split(":")[1]
        styleMap.set(styleName, styleValue)
    })
    return styleMap
}

/**
 * StyleのMapを結合して一つの文字列にする
 * @param {Map<String, String>} styleMap 
 * @returns style文字列
 */
function parseStyleToText(styleMap) {
    var tempStyle = ""
    styleMap.forEach(function (value, key, map) {
        tempStyle += key + ":" + value + ";"
    })
    return tempStyle
}

/**
 * Mapのリスト形式のStyleをtextrViewに適用する
 * @param {Map<String, String>} styleMap 
 */
function applyStyle(styleMap) {
    let styleText = parseStyleToText(styleMap)
    textView.style = styleText
}
