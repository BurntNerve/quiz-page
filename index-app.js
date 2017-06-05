ANSWERS = [
    [{ question: 'Which band wrote the song "Black Dog" after a black labrador walked into the studio?' },
        { content: "a. Led Zeppelin", correct: true },
        { content: "b. Deep Purple", correct: false },
        { content: "c. The Eagles", correct: false },
        { content: "d. The Allman Brothers", correct: false }
    ],
    [{ question: "Which band was kicked out of their own album's release party for starting a food fight?" },
        { content: "a. Queen", correct: false },
        { content: "b. Aerosmith", correct: false },
        { content: "c. The Beatles", correct: false },
        { content: "d. Nirvana", correct: true }
    ],
    [{ question: "Which famous rocker is The Muppet's Animal inspired by?" },
        { content: "a. Keith Moon", correct: false },
        { content: "b. Gene Simmons", correct: false },
        { content: "c. Mick Fleetwood", correct: true },
        { content: "d. Angus Young", correct: false }
    ],
    [{ question: "Which famous Hendrix song was written after he dreamt about walking under the sea?" },
        { content: "a. Purple Haze", correct: true },
        { content: "b. Fire", correct: false },
        { content: "c. Little Wing", correct: false },
        { content: "d. All Along The Watchtower", correct: false }
    ],
    [{ question: "Which famous singer's name is actually William Bailey?" },
        { content: "a. Sting", correct: false },
        { content: "b. Axl Rose", correct: true },
        { content: "c. The Edge", correct: false },
        { content: "d. Joe Strummer", correct: false }
    ],
    [{ question: 'From what classic rock movie does the phrase "These go to 11" come from?' },
        { content: "a. Wayne's World", correct: false },
        { content: "b. A Hard Day's Night", correct: false },
        { content: "c. Tenacious D in The Pick of Destiny", correct: false },
        { content: "d. This is Spinal Tap", correct: true }
    ],
    [{ question: 'Which band has 22 songs in their discography with the word "rock" in the title?' },
        { content: "a. AC/DC", correct: true },
        { content: "b. The Who", correct: false },
        { content: "c. The Doors", correct: false },
        { content: "d. Heart", correct: false }
    ]

];

TITLE_CARD_ELEMENT = ".js-title-card";
TITLE_BUTTON_ELEMENT = ".js-title-button";
QUIZ_AREA = ".js-quiz-area";
QUESTION_COUNTER = "#question-counter";
QUESTION = ".js-question";
ANSWER_ONE = "#answer-one";
ANSWER_TWO = "#answer-two";
ANSWER_THREE = "#answer-three";
ANSWER_FOUR = "#answer-four";
ANSWER_OPTIONS = ".js-answer-option";
GOOD_MESSAGE = "Correct!";
BAD_MESSAGE = "Incorrect!";
CORRECT_QUESTION_COUNT = "#correct-counter";
NEXT_BUTTON = "#next";


function handleQuizApp() {

    var questionNumber = 0;
    var correctCount = 0;

    function renderResults() {
        console.log("renderResults ran");
        $("js-results-page").fadeIn();
    }

    function handleNextClick() {
        console.log("handleNextClick ran");
        $(NEXT_BUTTON).click(function(event) {
            if ($(ANSWER_OPTIONS).hasClass("js-clicked")) {
                $(ANSWER_OPTIONS).removeClass("js-clicked correct correct-answer wrong-answer animated shake tada");
                $(ANSWER_OPTIONS).css({ "background-color": "#1B9CE5", "border": "2px solid white" });
                $(ANSWER_OPTIONS).hover(function() {
                    $(this).css({ "background-color": "#F79E02", "border": "2px solid #F79E02" });
                }, function() {
                    $(this).css({ "background-color": "#1B9CE5", "border": "2px solid white" });
                });
                if (questionNumber === 6) {
                    $(QUIZ_AREA).addClass("animated hinge");
                    renderResults();

                } else {

                    questionNumber++;
                    $(QUESTION_COUNTER).text(questionNumber + 1);
                    renderAnswers(questionNumber);
                }
            } else {
                $(ANSWER_OPTIONS).addClass("animated pulse");
                $(ANSWER_OPTIONS).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $(ANSWER_OPTIONS).removeClass("animated pulse");
                });
            }

        });
    }

    function handleAnswerClick() {
        console.log("handleAnswerClick ran");
        $(".js-answer-option").click(function(event) {
            event.preventDefault();
            if ($(event.currentTarget).hasClass("correct") && (!$(event.currentTarget).hasClass("js-clicked"))) {
                $(event.currentTarget).addClass("correct-answer animated tada");
                $(event.currentTarget).val(GOOD_MESSAGE);
                $(ANSWER_OPTIONS).addClass("js-clicked");
                correctCount++;
                $(CORRECT_QUESTION_COUNT).text(correctCount);
            } else if (!$(event.currentTarget).hasClass("correct") && (!$(event.currentTarget).hasClass("js-clicked"))) {
                $(event.currentTarget).addClass("wrong-answer animated shake");

                $(event.currentTarget).val(BAD_MESSAGE);
                $(ANSWER_OPTIONS).addClass("js-clicked");

            }
        });
    }

    function renderAnswers(questionNumber) {
        console.log("renderAnswers ran");
        $(QUESTION).text(ANSWERS[questionNumber][0].question);
        $(ANSWER_ONE).val(ANSWERS[questionNumber][1].content);
        $(ANSWER_TWO).val(ANSWERS[questionNumber][2].content);
        $(ANSWER_THREE).val(ANSWERS[questionNumber][3].content);
        $(ANSWER_FOUR).val(ANSWERS[questionNumber][4].content);

        for (var i = 1; i < ANSWERS[questionNumber].length; i++) {
            if (ANSWERS[questionNumber][i].correct) {
                if (i === 1) {
                    $(ANSWER_ONE).addClass("correct");
                    console.log(1);
                } else if (i === 2) {
                    $(ANSWER_TWO).addClass("correct");
                    console.log(2);
                } else if (i === 3) {
                    $(ANSWER_THREE).addClass("correct");
                    console.log(3);
                } else if (i === 4) {
                    $(ANSWER_FOUR).addClass("correct");
                    console.log(4);
                }
            }
        }
    }

    function handleStartClick() {
        console.log("handleStartClick ran")
        $(TITLE_CARD_ELEMENT).on("click", TITLE_BUTTON_ELEMENT, function(event) {
            event.preventDefault();
            $(TITLE_CARD_ELEMENT).fadeOut(1000);
            $(".js-quiz-area").delay(1000).fadeIn(3000)
            renderAnswers(0);
        });
    };




    handleStartClick();
    handleAnswerClick();
    handleNextClick();
};



$(handleQuizApp);
