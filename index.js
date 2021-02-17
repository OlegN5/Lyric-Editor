$el = document.querySelector('#editor').textContent
//const text= $el.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
//const text= 
$el = $el.replace(/[.,!?():;]/g,"")
$el = $el.replace('-',"=")

//const text1 = text.replace(/\s{2,}/g," ")
a = 'у,е,э,о,а,ы,я,и,ю,У,Е,Э,О,А,Ы,Я,И,Ю'.split(',')
// text = a.toarray.map(item => {
    

//     return $el = star($el, i);
// })
 
//
//debugger
console.log(a)
for (i of a) {
    $el = star($el, i);
}

$el = $el.replace("-"," ")


function star(string, token) {
    return string.split(token).join(token+'-');
  }
console.log($el)
//debugger

