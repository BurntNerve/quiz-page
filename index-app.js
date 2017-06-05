ANSWERS = [
	[{content: "a. Led Zeppelin", correct: true},
	{content: "b. Deep Purple", correct: false},
	{content: "c. The Eagles", correct: false},
	{content: "d. The Allman Brothers", correct: false}],
	[]

]

TITLE_CARD_ELEMENT = ".js-title-card";
TITLE_BUTTON_ELEMENT = ".js-title-button";
ANSWER_ONE = "#answer-one";
ANSWER_TWO = "#answer-two";
ANSWER_THREE = "#answer-three";
ANSWER_FOUR = "#answer-four"
ANSWER_OPTIONS = ".js-answer-option"

function handleQuizApp() {


	function handleAnswerClick() {
		console.log("handleAnswerClick ran")
		$(".js-answer-option").click(function(event) {
			event.preventDefault();
			console.log(event.currentTarget);
		});
	}

	function renderAnswers(questionNumber) {
		console.log("renderAnswers ran");
		$(ANSWER_ONE).val(ANSWERS[questionNumber][0].content);
		$(ANSWER_TWO).val(ANSWERS[questionNumber][1].content);
		$(ANSWER_THREE).val(ANSWERS[questionNumber][2].content);
		$(ANSWER_FOUR).val(ANSWERS[questionNumber][3].content);
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
};



$(handleQuizApp);
