const quiz = [
    {
        question: '日本で、富士山のつぎに、二番目に高い山は、どこですか？',
        answers: [ '八ヶ岳', '穂高岳', '槍ヶ岳', '北岳（白根山）'],
        correct: '北岳（白根山）'
    },{
        question: '日本でいちばん高い山、富士山の高さは、何メートルですか？',
        answers: [ '1776m', '2776m', '3776m', '4776m'],
        correct: '3776m'
    },{
        question: '日本でいちばん長い川は、どれですか？',
        answers: [ '信濃川', '利根川', '石狩川', '隅田川'],
        correct: '信濃川'
    },{
        question: '日本でいちばん広い湖は、どれですか？',
        answers: [ '琵琶湖', '芦ノ湖', '猪苗代湖', 'サロマ湖'],
        correct: '琵琶湖'
    },{
        question: '山梨県、長野県、新潟県の３つを合わせて、何と呼びますか？',
        answers: [ '北陸', '北関東', '東海道', '甲信越'],
        correct: '甲信越'
    },{
        question: '島根県、鳥取県のあたりの地方を、何と呼びますか？',
        answers: [ '山陰', '山裏', '山後', '山奥'],
        correct: '山陰'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解！');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題数がまだあればこちらを実行
        setupQuiz();
    } else {
        //問題数がもうなければこちらを実行
        window.alert('終了！　あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
}

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;    
}