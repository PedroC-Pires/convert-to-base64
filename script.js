/*

    onclick(base64(this))
    onchange(base64(this))

*/

const imageId = document.getElementById("image");
let a = null;
function base64(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        //console.log(reader.result)
        a = reader.result;
    };
    reader.readAsDataURL(file);
}
