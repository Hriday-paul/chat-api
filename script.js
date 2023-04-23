// require('dotenv').config();
// console.log(process.env.api_key);

      let key = hide.key;
      document.querySelector("button").addEventListener("click", function(){
        document.querySelector(".ans-txt").innerHTML = 'Please wait . . . .'
        let usevalue = document.querySelector("input").value;
        fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              { role: 'user', content: `${usevalue}` }
            ],
            temperature: 0.7
          })
        })
        .then(response => response.json())
        .then(data => {
          //console.log(data)
          document.querySelector(".ans-txt").innerHTML = data.choices[0].message.content;
          document.querySelector("input").value="";
        })
        .catch(error => {
          console.log(error);
        });
      })