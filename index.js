$el = document.querySelector('#editor').textContent

const cD = document.querySelector('#checkDelete')
const checkDelete = cD.checked
const charsDelete = document.querySelector('#charsDelete').value


var checkbox = document.querySelector('#checkDelete');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
    $el = $el.replace(new RegExp(`[${charsDelete}]`, "g"), "") 
    document.querySelector('#result').textContent = $el
  } else {

    console.log("Checkbox is not checked..");
  }
});

  $el = $el.replace('-',"=")
  document.querySelector('#result').textContent = $el
  
a = 'у,е,э,о,а,ы,я,и,ю,У,Е,Э,О,А,Ы,Я,И,Ю'.split(',')

a.map(item => $el = star($el, item))

$el = $el.replace(/- /g," ")
//$el = $el.replace(new RegExp(`- `, "g"), " ") // variant
document.querySelector('#result').textContent = $el

function star(string, token) {
    return string.split(token).join(token+'-');
  }



