const testStart = document.querySelector('.test-start'),
    startBtn = document.querySelector('.startBtn'),
    test = document.querySelector('.test'),
    question = document.querySelector('.question'),
    answer = document.querySelectorAll('#answer'),
    answerRadio = document.querySelectorAll('#answerRadio'),
    sendBtn = document.querySelector('.sendBtn'),
    info = document.querySelector('.info'),
    result = document.querySelector('.result')

let counter = 0
let statistics = ''

startBtn.addEventListener('click', () => {

    testStart.classList.add('hidden')
    info.classList.add('hidden')

    test.classList.remove('hidden')
    result.classList.remove('hidden')

    reset()
    getQuestion(counter)

})

sendBtn.addEventListener('click', checkAnswer)

function getQuestion(counter) {

    question.textContent = `${counter + 1}. ${arrQuestions[counter][0][1]}`

    for (let i = 1, index = 0; i <= 3; i++, index++) {
        answer[index].textContent = arrQuestions[counter][i][1]
        answerRadio[index].value = arrQuestions[counter][i][1]
    }


}

function checkAnswer() {

    answerRadio.forEach(el => {

        if (el.checked) {

            if (el.value == arrQuestions[counter][4][1]) {
                result.children[counter].textContent = `${counter + 1}. Правильно`
                result.children[counter].style.color = 'darkblue'
            }
            else {
                result.children[counter].textContent = `${counter + 1}. Не правильно`
                result.children[counter].style.color = '#000'
            }

        }

    })

    counter++

    if (counter >= arrQuestions.length) {

        testStart.classList.remove('hidden')
        test.classList.add('hidden')

        testStart.children[0].textContent = 'Попробуйте еще раз'
        testStart.children[1].textContent = 'Повторяя тесты вы улучшаете свой знания!'
        testStart.children[2].textContent = 'Хорошо'

        return
    }

    getQuestion(counter)

}

function reset() {

    if (result.childElementCount == arrQuestions.length) {

        for (let i = 0; i < arrQuestions.length; i++) {

            result.removeChild(result.lastChild)

        }

        for (let i = 0; i < arrQuestions.length; i++) {
            console.log(i)

            let li = document.createElement('li')
            li.textContent = `${i + 1}. Вопрос`
            result.appendChild(li)

        }

    } else {

        for (let i = 0; i < arrQuestions.length; i++) {
            console.log(i)

            let li = document.createElement('li')
            li.textContent = `${i + 1}. Вопрос`
            result.appendChild(li)

        }

    }

    counter = 0
}

let arrQuestions = [
    [
        ['question', 'JavaScript программист какой?'],
        ['option1', 'Самый лучший'],
        ['option2', 'Самый худщий'],
        ['option3', 'Средний'],
        ['truequestion', 'Самый лучший'],
    ],

    [
        ['question', 'Кто я?'],
        ['option1', 'Человек'],
        ['option2', 'Диас'],
        ['option3', 'Программист'],
        ['truequestion', 'Диас'],
    ],

    [
        ['question', 'Я руский?'],
        ['option1', 'Метис'],
        ['option2', 'Нет'],
        ['option3', 'Да'],
        ['truequestion', 'Нет'],
    ],

    [
        ['question', 'Я казах?'],
        ['option1', 'Да'],
        ['option2', 'Нет'],
        ['option3', 'Сам не знаю'],
        ['truequestion', 'Да'],
    ],

    [
        ['question', '1+1 = ?'],
        ['option1', '2'],
        ['option2', '2+2'],
        ['option3', '2^2'],
        ['truequestion', '2'],
    ],

    [
        ['question', 'Кто открыл Америку?'],
        ['option1', 'Человек'],
        ['option2', 'Петр 1'],
        ['option3', 'Петр 99'],
        ['truequestion', 'Человек'],
    ],

    [
        ['question', 'Добрый это какой человек?'],
        ['option1', 'Добрый'],
        ['option2', 'Не добрый'],
        ['option3', 'Пьюший добрый'],
        ['truequestion', 'Добрый'],
    ],

    [
        ['question', 'Азамат на русском как будет?'],
        ['option1', 'Человек'],
        ['option2', 'Мужчина'],
        ['option3', 'Герой'],
        ['truequestion', 'Мужчина'],
    ],

    [
        ['question', 'День независимости Казахстана?'],
        ['option1', '16декабрь'],
        ['option2', '1991год'],
        ['option3', 'Не знаю'],
        ['truequestion', '16декабрь'],
    ],

    [
        ['question', 'Собака + кошка'],
        ['option1', 'Гибрид'],
        ['option2', 'Котопес'],
        ['option3', 'Илон Маск'],
        ['truequestion', 'Котопес'],
    ],

    [
        ['question', '1x + 10 = 2x'],
        ['option1', '10'],
        ['option2', '4'],
        ['option3', '8'],
        ['truequestion', '10'],
    ],

    [
        ['question', 'Кто открыл Америку?'],
        ['option1', 'Петрлар'],
        ['option2', 'Гитлер'],
        ['option3', 'Я'],
        ['truequestion', 'Я'],
    ]

]