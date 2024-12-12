function greetWorld() {

  try {
    var greeting = "Hello world!";
    aler(greeting);
    console.log(true)

  } catch (err) {
    console.log(err);
  }
}

greetWorld()



let submitForm = (e)=>{
  e.preventDefault();

  let uName = document.getElementById('name').value
  let pass = document.getElementById('password').value

  try {
    if(uName.length === 0 || pass.length === 0 ){
      throw 'uName'
    }
    if(uName.length < 3){
      throw "name should be atleast 3 ch"
    }

  } catch (error) {
    console.log(error);

  }


}

