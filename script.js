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
        p{
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
        h1{
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

    <div class="container"></div>
        <h1>Choose Your Option</h1>
        <p>But I must explain to you how all this mistaken idea of denouncing.</p>
        <div class="options">
            <div class="option freelancer">
                <h2>FREELANCER</h2>
                <h1>Initially <br> designed to</h1>
                <p>But must explain to you how all this <br> mistaken idea of denouncing</p>
                <button>START HERE</button>
            </div>
            <div class="option studio">
                <h2>STUDIO</h2>
                <h1>Initially <br> designed to</h1>
                <p>But must explain to you how all this <br>mistaken idea of denouncing</p>
                <button>START HERE</button>
            </div>
        </div>
    </div>
    `;
});