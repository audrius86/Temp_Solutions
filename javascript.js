const turinys = document.querySelector('input');

const container = document.querySelector('.container');

turinys.addEventListener('input', (e) => {
  e.preventDefault();

  let inputName = String(document.querySelector('input[name=vardas]').value);

  if(inputName === "Giedrė" || inputName === "Giedre") {
            container.style.backgroundColor = "red";

            document.querySelector('#result').textContent = `${inputName} yra visiška lenkė, bl.`
        }
        else{
            container.style.backgroundColor = "green";

            const last = inputName.charAt(inputName.length - 1);

            if(last === 's') {

            document.querySelector('#result').textContent = `${inputName} yra lietuvis`
            }
            else if(last === 'ė' || last === 'a'){
                document.querySelector('#result').textContent = `${inputName} yra lietuvė`
            }
        }

        
});

