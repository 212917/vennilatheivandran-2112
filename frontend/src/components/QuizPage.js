import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedHearts from "./AnimatedHearts";
import AdSenseAd from "./AdSenseAd";

const QuizPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [name, setName] = useState("");
  const [showNameInput, setShowNameInput] = useState(true);

  const questions = [
    {
      id: 1,
      question: "If you propose your girlfriend, what will you give?",
      options: [
        { text: "💍 Ring", value: 1 },
        { text: "🍫 Chocolate", value: 0 },
        { text: "🌹 Flower", value: 0 },
        { text: "🎁 Surprise gift", value: 0 },
      ],
    },
    {
      id: 2,
      question: "Where would you take her on Valentine's Day?",
      options: [
        { text: "🍽 Candlelight dinner", value: 1 },
        { text: "🏖 Beach", value: 0 },
        { text: "🎬 Movie", value: 0 },
        { text: "🏞 Long drive", value: 0 },
      ],
    },
    {
      id: 3,
      question: "What do you like most about her?",
      options: [
        { text: "❤️ Caring nature", value: 1 },
        { text: "😊 Smile", value: 0 },
        { text: "😂 Sense of humor", value: 0 },
        { text: "👀 Eyes", value: 0 },
      ],
    },
    {
      id: 4,
      question: "What is your dream couple date?",
      options: [
        { text: "✈️ Travel trip", value: 1 },
        { text: "☕ Coffee date", value: 0 },
        { text: "🛍 Shopping together", value: 0 },
        { text: "🏠 Home movie night", value: 0 },
      ],
    },
    {
      id: 5,
      question: "How often do you say \"I love you\"?",
      options: [
        { text: "Always", value: 1 },
        { text: "Daily", value: 0 },
        { text: "Sometimes", value: 0 },
        { text: "Only special days", value: 0 },
      ],
    },
    {
      id: 6,
      question: "What gift would you buy for her?",
      options: [
        { text: "💎 Jewelry", value: 1 },
        { text: "👗 Dress", value: 0 },
        { text: "🧸 Teddy bear", value: 0 },
        { text: "🎨 Handmade gift", value: 0 },
      ],
    },
    {
      id: 7,
      question: "What song reminds you of her?",
      options: [
        { text: "🎵 Our special song", value: 1 },
        { text: "💕 Romantic song", value: 0 },
        { text: "🎶 Melody song", value: 0 },
        { text: "❤️ Love theme", value: 0 },
      ],
    },
    {
      id: 8,
      question: "What makes her angry?",
      options: [
        { text: "All above", value: 1 },
        { text: "⏰ You coming late", value: 0 },
        { text: "💬 Not replying", value: 0 },
        { text: "📅 Forgetting date", value: 0 },
      ],
    },
    {
      id: 9,
      question: "Who is more romantic?",
      options: [
        { text: "👫 Both", value: 1 },
        { text: "🙋 Me", value: 0 },
        { text: "🙋‍♀️ She", value: 0 },
        { text: "🤔 Not sure", value: 0 },
      ],
    },
    {
      id: 10,
      question: "Will you marry her?",
      options: [
        { text: "Forever yes 💖", value: 1 },
        { text: "Yes ✅", value: 0 },
        { text: "Definitely yes 💯", value: 0 },
        { text: "100% yes 🎉", value: 0 },
      ],
    },
    {
      id: 11,
      question: "What's your favorite memory with her? 💭",
      options: [
        { text: "💑 Our first date", value: 1 },
        { text: "🎉 A special celebration", value: 0 },
        { text: "✈️ A trip together", value: 0 },
        { text: "🏠 Quiet moments at home", value: 0 },
      ],
    },
    {
      id: 12,
      question: "What do you feel when you think about her?",
      options: [
        { text: "😍 Deeply in love", value: 1 },
        { text: "😊 Happy and content", value: 0 },
        { text: "😢 Emotional and grateful", value: 0 },
        { text: "🍀 Lucky to have her", value: 0 },
      ],
    },
    {
      id: 13,
      question: "Where would you love to take her? 🌍",
      options: [
        { text: "🗼 Dream destination", value: 1 },
        { text: "🏖 Beach paradise", value: 0 },
        { text: "🏔 Mountain retreat", value: 0 },
        { text: "🏙 City exploration", value: 0 },
      ],
    },
    {
      id: 14,
      question: "What makes your relationship special? ✨",
      options: [
        { text: "💝 Everything about it", value: 1 },
        { text: "💬 Great communication", value: 0 },
        { text: "😂 We laugh together", value: 0 },
        { text: "🤝 We support each other", value: 0 },
      ],
    },
    {
      id: 15,
      question: "What's her most attractive quality? 💖",
      options: [
        { text: "💕 Her loving heart", value: 1 },
        { text: "😊 Her beautiful smile", value: 0 },
        { text: "🧠 Her intelligence", value: 0 },
        { text: "✨ Her personality", value: 0 },
      ],
    },
    {
      id: 16,
      question: "When do you miss her the most? 🌙",
      options: [
        { text: "🌃 Every moment apart", value: 1 },
        { text: "🌅 In the morning", value: 0 },
        { text: "☀️ During the day", value: 0 },
        { text: "🌆 At night", value: 0 },
      ],
    },
    {
      id: 17,
      question: "What's your dream for your future together? 🌟",
      options: [
        { text: "💑 Growing old together", value: 1 },
        { text: "👨‍👩‍👧‍👦 Starting a family", value: 0 },
        { text: "✈️ Traveling the world", value: 0 },
        { text: "🏠 Building a home", value: 0 },
      ],
    },
    {
      id: 18,
      question: "How would you describe your love? 💫",
      options: [
        { text: "💖 Passionate and eternal", value: 1 },
        { text: "😂 Fun and joyful", value: 0 },
        { text: "🤗 Warm and comforting", value: 0 },
        { text: "🌹 Romantic and sweet", value: 0 },
      ],
    },
    {
      id: 19,
      question: "What do you treasure most about her? 💎",
      options: [
        { text: "💝 Everything about her", value: 1 },
        { text: "❤️ How she loves me", value: 0 },
        { text: "🌟 Her uniqueness", value: 0 },
        { text: "😊 How she makes me feel", value: 0 },
      ],
    },
    {
      id: 20,
      question: "How much do you love her? 💕",
      options: [
        { text: "♾️ Infinite and beyond ❤️", value: 1 },
        { text: "💖 More than words", value: 0 },
        { text: "💗 With all my heart", value: 0 },
        { text: "💝 Forever and always", value: 0 },
      ],
    },
  ];

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setShowNameInput(false);
    }
  };

  const handleAnswer = (questionId, optionIndex, value) => {
    setAnswers({ ...answers, [questionId]: { index: optionIndex, value: value } });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateAndSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateAndSubmit = () => {
    const score = Object.values(answers).reduce((sum, answer) => {
      return sum + (answer.value || 0);
    }, 0);
    let resultMessage = "";
    
    if (score <= 3) {
      resultMessage = "Friend zone 😅";
    } else if (score <= 6) {
      resultMessage = "Good love 💕";
    } else {
      resultMessage = "True love 💖";
    }

    navigate("/result", {
      state: {
        name,
        score,
        resultMessage,
      },
    });
  };

  const isAnswered = () => {
    const question = questions[currentQuestion];
    return answers[question.id] !== undefined;
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showNameInput) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-rose-400 to-red-400 relative overflow-hidden flex items-center justify-center">
        <AnimatedHearts />
        <div className="relative z-10 glass-effect rounded-3xl p-10 max-w-md mx-4 fade-in-up">
          <h2 className="text-4xl font-bold text-center text-pink-600 mb-6">
            Welcome! 💖
          </h2>
          <form onSubmit={handleNameSubmit}>
            <label className="block text-lg text-gray-700 mb-3">
              Enter your name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:outline-none mb-6"
              placeholder="Your name..."
              required
              data-testid="name-input"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300"
              data-testid="name-submit-button"
            >
              Start Quiz ❤️
            </button>
          </form>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-rose-400 to-red-400 relative overflow-hidden">
      <AnimatedHearts />
      
      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-3xl pulse-heart">❤️</span>
          <span className="text-xl font-bold text-white">{name}'s Quiz</span>
        </div>
        <span className="text-white font-semibold">
          {currentQuestion + 1} / {questions.length}
        </span>
      </header>

      {/* Progress Bar */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-6">
        <div className="bg-white/30 rounded-full h-4 overflow-hidden">
          <div
            className="bg-white h-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Ad Space */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-6">
        <div className="ad-container" data-testid="quiz-ad">
          <AdSenseAd 
            adSlot="3456789012"
            style={{ minHeight: "90px" }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 pb-8">
        <div className="glass-effect rounded-3xl p-8 md:p-12 slide-in">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-8">
            {question.question}
          </h2>

          {question.isImageUpload ? (
            <div className="space-y-6">
              <div className="border-4 border-dashed border-pink-300 rounded-2xl p-8 text-center hover:border-pink-500 transition-all duration-300">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                  data-testid="image-upload-input"
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer block"
                >
                  {uploadedImage ? (
                    <img
                      src={uploadedImage}
                      alt="Couple"
                      className="max-w-full h-64 object-contain mx-auto rounded-xl"
                      data-testid="uploaded-image-preview"
                    />
                  ) : (
                    <div>
                      <span className="text-6xl mb-4 block">📸</span>
                      <p className="text-gray-600 text-lg">
                        Click to upload your couple photo
                      </p>
                    </div>
                  )}
                </label>
              </div>
              {uploadedImage && (
                <button
                  onClick={() => {
                    setUploadedImage(null);
                    setAnswers({ ...answers, 11: undefined });
                  }}
                  className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl hover:bg-gray-300 transition-all duration-300"
                  data-testid="remove-image-button"
                >
                  Remove Photo
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {question.options.map((option, index) => (
                <label
                  key={index}
                  className={`block p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    answers[question.id]?.index === index
                      ? "bg-pink-500 text-white scale-105 shadow-lg"
                      : "bg-pink-50 hover:bg-pink-100 hover:scale-102"
                  }`}
                  data-testid={`option-${index}`}
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={index}
                    checked={answers[question.id]?.index === index}
                    onChange={() => handleAnswer(question.id, index, option.value)}
                    className="hidden"
                  />
                  <span className="text-lg">{option.text}</span>
                </label>
              ))}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-10">
            {currentQuestion > 0 && (
              <button
                onClick={handlePrevious}
                className="flex-1 bg-white text-pink-600 py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300"
                data-testid="previous-button"
              >
                ← Previous
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!isAnswered()}
              className={`flex-1 py-4 rounded-xl font-bold transition-all duration-300 ${
                isAnswered()
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:scale-105"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              data-testid="next-button"
            >
              {currentQuestion === questions.length - 1 ? "Submit 💖" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
