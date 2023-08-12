const container= document.getElementById('container');
function flexBox1() {    

 container.innerHTML = 
           ` <div id="flex1">
                <div id="orangeBall"></div>
                <div id="blueBall"></div>
            </div>     `

}
function flexBox2() {    
container.innerHTML = ''
 container.innerHTML = 
           ` <div id="flex2">
                <div id="orangeContainer">
                <div id="orange"></div>
                </div>
                <div id="blueContainer">
                <div id="blueBox"></div>
                <div id="blueBox"></div>
                </div>
            </div>     `
}

function flexBox3() {    const dataHora = new Date();
    var options = { day: 'numeric', month: 'short', year: 'numeric' };
    var format = dataHora.toLocaleDateString('pt-br', options);
    var options = { hour: '2-digit', minute: '2-digit', hour12: true };
    var formatHour = dataHora.toLocaleTimeString('pt', options);
container.innerHTML = ''
 container.innerHTML = 
           ` <div id="flex3">
                <section id="headContainer">
                <div id="logo">
                <img src="https://www.feevale.br/Comum/midias/6a7f34d6-a1dc-4638-8565-e7b1592e483d.jpg" alt="logo"> <div id="user">
                <h3>Growdev</h3>
                <p>@growdev</p>
                </div>
                </div>
               
                <button>Follow</button>
                </section>
                <section id="bodyContainer">
                 <p>O programa Starter, além de uma formação completa de Desenvolvimento Web Full Stack, com metodologia de ensino e tecnologias direcionadas para o e as empresas demandam, tem o principal objetivo de preparar e apoai a sua inserção no mercado de trabalho.</p>
                 <span>${formatHour} - ${format} </span>
                </section>
         
                <section id="footContainer">
                 <div id="stats">
                 <ul>
                 <li><b>320</b> Repiles</li>
                 <li><b>107</b>  Retweets</li>
                 <li><b>431</b> Likes</li>
                 <li><b>1K</b> Views</li>
                 </ul>
                 </div>
                 
                 <div id="actions">
                 <button>Share</button>
                 <button>Retweet</button>
                 <button>Like</button>
                 </div>
                </section>
            </div>     `
}

const style = document.getElementsByTagName('link');
function esqueleto() {
style[0].setAttribute('href', 'exo.css');
}