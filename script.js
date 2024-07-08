/*

    --Quick guide--

    --Two ways to use it on HTML--
    onclick(base64(this));
    onchange(base64(this));

    --Two ways to get the value on JS--
    console.log(base64Element);
    let a = base64Element;
    
*/

const imageId = document.getElementById("image");
let base64Element = null;
function base64(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        //console.log(reader.result)
        base64Element = reader.result;
    };
    reader.readAsDataURL(file);
}
