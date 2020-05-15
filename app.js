let UIButton = document.querySelector('.get-jokes');
UIButton.addEventListener('click',JokesGen);



function JokesGen(e){
  const number = document.querySelector('input[type="number"]').value;
  console.log(number);

  const xhr = new XMLHttpRequest();
  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
  xhr.onload =function(){
    if(this.status===200){
      const response = JSON.parse(this.responseText);
      let output = '';
      if(response.type=='success'){
        response.value.forEach(element => {
          output+=`
          <li>${element.joke}</li>
          `;
        });
      }
      else{
          output+='somethings wrong';
      }

      document.querySelector('.jokes').innerHTML=output;
    }
  }
  xhr.send();


  e.preventDefault();
}