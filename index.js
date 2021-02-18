//vowels = 'уеэоаыяиюУЕЭОАЫЯИЮ'
vowels = '(у)(е)(э)(о)(а)(ы)(я)(и)(ю)(У)(Е)(Э)(О)(А)(Ы)(Я)(И)(Ю)'
//.split(',')
const charsDelete = document.querySelector('#charsDelete').value




$el = document.querySelector('#editor').textContent
//console.log($el)
$el = $el.replace(/       /g," ")
$el = $el.replace(/      /g," ")
$el = $el.replace(/     /g," ")
$el = $el.replace(/    /g," ")
$el = $el.replace(/   /g," ")
$el = $el.replace(/  /g," ")
//console.log($el)
// создание модели ПЕСНЯ

  let kuplets = $el.split(`\n \n`)



  let Pesnja = kuplets.map(kuplet => {
    
    let lines = kuplet.split(`\n`)

    
        lines.map(line => { 

            //String.prototype.trim(line)  
            console.log(line)
            console.log('_________') 

            words = line.split(` `)
                //console.log(words)

            syllables = words.map(word => {
              
                return word.split(new RegExp(`(?=[${vowels}])`, "g"))
                
                
                // variant
                //console.log(syllables)
                }
                )
            console.log(syllables) 
        }
        )
         
  }
  )
  //return string.split(token).join(token + '-');
 


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



