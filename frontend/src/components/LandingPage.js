import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AnimatedHearts from "./AnimatedHearts";

const LandingPage = () => {
  const navigate = useNavigate();
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const quizUrl = window.location.origin;

  const shareOnWhatsApp = () => {
    const text = `💖 Take this Valentine Quiz and discover your true love score! 💖\n\nFind out if you're in the friend zone or true love!\n\n${quizUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(quizUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareViaEmail = () => {
    const subject = "Take this Valentine Quiz! 💖";
    const body = `I found this amazing Valentine Quiz!\n\nDiscover your true love score by taking this romantic 20-question quiz.\n\nTake the quiz here: ${quizUrl}\n\nLet me know your results! 💕`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-rose-400 to-red-400 relative overflow-hidden">
      <AnimatedHearts />
      
      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-4xl pulse-heart">❤️</span>
          <h1 className="text-2xl font-bold text-white">Nila Quiz</h1>
        </div>
        <button
          onClick={() => navigate("/history")}
          className="bg-white/30 backdrop-blur-md text-white px-6 py-2 rounded-full hover:bg-white/40 transition-all duration-300"
          data-testid="history-button"
        >
          📊 History
        </button>
      </header>

      {/* Ad Space - Top */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="ad-container">
          <span data-testid="top-ad">Advertisement Space - 728x90</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
        <div className="fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
            ❤️ Valentine Quiz ❤️
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8 drop-shadow">
            Discover Your True Love Score!
          </p>
          
          <div className="glass-effect rounded-3xl p-8 max-w-2xl mx-auto mb-10 slide-in">
            <p className="text-lg text-gray-800 mb-4">
              Take our romantic 20-question quiz and find out:
            </p>
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">💕</span>
                <span className="text-gray-700">How much you truly love your partner</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">💖</span>
                <span className="text-gray-700">Your romantic compatibility score</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">💗</span>
                <span className="text-gray-700">Personalized love messages</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📱</span>
                <span className="text-gray-700">Share results on WhatsApp</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate("/quiz")}
            className="bg-white text-pink-600 px-12 py-5 rounded-full text-2xl font-bold hover:scale-110 hover:shadow-2xl transition-all duration-300 transform pulse-heart"
            data-testid="start-quiz-button"
          >
            Start Quiz 💖
          </button>
        </div>
      </div>

      {/* Ad Space - Bottom */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-8">
        <div className="ad-container">
          <span data-testid="bottom-ad">Advertisement Space - 728x90</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center text-white/80 py-6">
        <p>Made with ❤️ for Valentine's Day</p>
      </footer>
    </div>
  );
};

export default LandingPage;