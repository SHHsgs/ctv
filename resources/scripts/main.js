const textView = document.getElementById("textView");
const defaultText = "入力したテキストがここに表示されます"

/*
textInput.addEventListener("change", function() {
    const text = textInput.val;
    textView.val = text;
});
*/

function inputChange() {
    let textInput = document.getElementById("textInput");
    textView.innerText = textInput.value != "" ? textInput.value : defaultText
}
