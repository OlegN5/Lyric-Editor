vowels = 'уеэоаыяиюУЕЭОАЫЯИЮ'

//.split(',')
const charsDelete = document.querySelector('#charsDelete').value

$el = document.querySelector('#editor').textContent

$el = $el.replace(/       /g," ")
$el = $el.replace(/      /g," ")
$el = $el.replace(/     /g," ")
$el = $el.replace(/    /g," ")
$el = $el.replace(/   /g," ")
$el = $el.replace(/  /g," ")

// создание модели ПЕСНЯ

  let kuplets = $el.split(`\n \n`)
  let Pesnja = kuplets.map(kuplet => {
  let lines = kuplet.split(`\n`)
  lines.map(line => { 
  words = line.split(` `)
  syllables = words.map(word => {
  //return word.split(new RegExp(`(?=[${vowels}])`, "g")) 
    return word.split(/[уеёэоаыяиюУЕЁЭОАЫЯИЮ]/g)
  }
  )
  console.log(syllables) 
  }
  )       
  }
  )

 
let checkbox = document.querySelector('#checkDelete');

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
    return string.split(token).join(token + '-');
  }
