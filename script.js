document.addEventListener("DOMContentLoaded", function() {
    document.body.innerHTML = `
<style>
        *{
            padding: 0;
            margin: 0;
        }
        body {
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #FFFFFF;
            margin: 0;
        }
        .container {
            text-align: center;
        }
        .container p{
            font-family: "Open Sans", sans-serif;
            font-size: 14px;
            color: #9FA3A7;
            margin-bottom: 60px;
        }
        .options {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }
        .option {
            background-color: #FFFFFF;
            width: 400px;
            height: 480px;
            text-align: center;
        }
        .option.freelancer{
            border: 1px solid #E8E9ED;
            border-right: none;
            border-radius: 10px 0px 0px 10px;
        }
        .option.studio {
            background-color: #8F75BE;
            border-radius: 0 10px 10px 0;
            border: 1px solid #8F75BE;
            border-left: none;
            color: white;
        }
        .option h2 {
            margin-top: 80px;
        }
        .option>p {
            font-family: "Open Sans", sans-serif;
            font-size: 12px;
            margin: 0;
        }
        .option.freelancer p{
            color: #9FA3A7;
            margin-top: 30px;
            margin-bottom: 0;
        }
        .option.studio p{
            color: #FFFFFF;
            margin-top: 30px;
            margin-bottom: 0;
        }
        .option button {
            font-family: "Montserrat", sans-serif;
            font-weight: bold;
            margin-top: 65px;
            padding: 10px 20px;
            border: 3px solid #FFC80A;
            border-radius: 20px;
            background-color: rgba(28, 28, 28, 0);
            color: black;
            cursor: pointer;
            letter-spacing: 2.4px;
        }
        .option.studio button{
            color: white;
        }
        .option.studio h2{
            font-family: "Montserrat", sans-serif;
            font-size: 12px;
            letter-spacing: 2.4px;
            color: #FFC80A;
            margin-bottom: 20px;
        }
        .container h1{
            font-family: "Arvo", serif;
            font-weight: 400;
            font-size: 36px;
            margin-bottom: 10px;
        }
        .option.freelancer h2{
            font-family: "Montserrat", sans-serif;
            font-size: 12px;
            letter-spacing: 2.4px;
            color: #9FA3A7;
            margin-bottom: 20px;
        }
        .option.freelancer h1{
            font-family: "Arvo", serif;
            font-size: 36px;
            color: #212121;
            margin: 0;
        }
    </style>
    `;

    // Создание контейнера
const container = document.createElement('div');
container.className = 'container';

// Создание заголовка
const mainTitle = document.createElement('h1');
mainTitle.textContent = 'Choose Your Option';
container.append(mainTitle);

// Создание параграфа
const paragraph = document.createElement('p');
paragraph.textContent = 'But I must explain to you how all this mistaken idea of denouncing.';
container.append(paragraph);

// Создание блока с опциями
const options = document.createElement('div');
options.className = 'options';
container.append(options);

// Создание опции Freelancer
const freelancerOption = document.createElement('div');
freelancerOption.className = 'option freelancer';

const freelancerTitle = document.createElement('h2');
freelancerTitle.textContent = 'FREELANCER';
freelancerOption.append(freelancerTitle);

const freelancerSubtitle = document.createElement('h1');
freelancerSubtitle.innerHTML = 'Initially <br> designed to';
freelancerOption.append(freelancerSubtitle);

const freelancerParagraph = document.createElement('p');
freelancerParagraph.innerHTML = 'But must explain to you how all this <br> mistaken idea of denouncing';
freelancerOption.append(freelancerParagraph);

const freelancerButton = document.createElement('button');
freelancerButton.textContent = 'START HERE';
freelancerOption.append(freelancerButton);

options.append(freelancerOption);

// Создание опции Studio
const studioOption = document.createElement('div');
studioOption.className = 'option studio';

const studioTitle = document.createElement('h2');
studioTitle.textContent = 'STUDIO';
studioOption.append(studioTitle);

const studioSubtitle = document.createElement('h1');
studioSubtitle.innerHTML = 'Initially <br> designed to';
studioOption.append(studioSubtitle);

const studioParagraph = document.createElement('p');
studioParagraph.innerHTML = 'But must explain to you how all this <br> mistaken idea of denouncing';
studioOption.append(studioParagraph);

const studioButton = document.createElement('button');
studioButton.textContent = 'START HERE';
studioOption.append(studioButton);

options.append(studioOption);

// Добавление контейнера в body
document.body.append(container);
});

