const defaultText = "パラメータ\"text\"の指定方法が不正です"

// クエリからテキストとスタイルを入力&viewに反映
setTextView()

function setTextView() {
    let querys = location.search.split("&")
    // クエリストリングからtextパラメータの値を取得
    let queryText = querys.find(param => param.indexOf("text") >= 0)?.split("=")[1]
    // viewに反映
    textView.innerText = isNotEmpty(queryText) ? decodeURI(queryText) : defaultText
    let queryStyle = querys.find(param => param.indexOf("style") >= 0)?.split("=")[1]
    // スタイル反映
    if (isNotEmpty(queryText)) textView.style = decodeURI(queryStyle)
}

function isNotEmpty(text) {
    return text != undefined && text != ""
}