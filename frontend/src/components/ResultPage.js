import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import AnimatedHearts from "./AnimatedHearts";
import AdSenseAd from "./AdSenseAd";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  const { name, score, resultMessage } = location.state || {};

  const quizUrl = window.location.origin;

  useEffect(() => {
    if (!name || score === undefined) {
      navigate("/");
    }
  }, [name, score, navigate]);

  const saveResult = async () => {
    setSaving(true);
    try {
      await axios.post(`${API}/quiz/submit`, {
        name,
        score,
        result_message: resultMessage,
      });
      setSaved(true);
    } catch (error) {
      console.error("Error saving result:", error);
      alert("Failed to save result. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const shareOnWhatsApp = () => {
    const heartEmoji = getScoreEmoji();
    const text = `🎉 My Valentine Quiz Result! 🎉\n\n👤 Name: ${name}\n❤️ Love Score: ${score}/20 ${heartEmoji}\n💖 Result: ${resultMessage}\n\nTake the quiz too! 💕\n${quizUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  const shareQuizLink = () => {
    const text = `💖 I just took this Valentine Quiz and got ${score}/20! 💖\n\nWant to test your love? Take the quiz:\n${quizUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  const getScoreEmoji = () => {
    if (score <= 3) return "😅";
    if (score <= 6) return "💕";
    return "💖";
  };

  const getScoreMessage = () => {
    if (score <= 3) {
      return "Don't worry! Love takes time to grow. Keep showing your care! 🌱";
    }
    if (score <= 6) {
      return "You're on the right track! Your love is growing stronger every day! 🌟";
    }
    return "Congratulations! You've found true love! Cherish it forever! 🎊";
  };

  if (!name) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-rose-400 to-red-400 relative overflow-hidden">
      <AnimatedHearts />
      
      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-3xl pulse-heart">❤️</span>
          <h1 className="text-2xl font-bold text-white">Quiz Results</h1>
        </div>
        <button
          onClick={() => navigate("/")}
          className="bg-white/30 backdrop-blur-md text-white px-6 py-2 rounded-full hover:bg-white/40 transition-all duration-300"
          data-testid="home-button"
        >
          🏠 Home
        </button>
      </header>

      {/* Ad Space */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-6">
        <div className="ad-container" data-testid="result-ad">
          <AdSenseAd 
            adSlot="4567890123"
            style={{ minHeight: "90px" }}
          />
        </div>
      </div>

      {/* Result Card */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 pb-8">
        <div className="glass-effect rounded-3xl p-8 md:p-12 fade-in-up">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
              {name}'s Results 🎉
            </h2>
            
            {/* Score Display */}
            <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-8 mb-6">
              <p className="text-gray-600 text-lg mb-2">Your Love Score</p>
              <div className="text-7xl font-bold gradient-text mb-2">
                {score}/20
              </div>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 20 }, (_, i) => i).map((i) => (
                  <span key={i} className={i < score ? "text-red-500" : "text-gray-300"}>
                    {i < score ? "❤️" : "🤍"}
                  </span>
                ))}
              </div>
              <div className="text-4xl mb-3">{getScoreEmoji()}</div>
              <h3 className="text-3xl font-bold text-pink-600 mb-3">
                {resultMessage}
              </h3>
              <p className="text-gray-700 text-lg">
                {getScoreMessage()}
              </p>
              
              {/* Score Category Breakdown */}
              <div className="mt-6 bg-pink-50 rounded-xl p-4 text-left">
                <p className="text-sm font-bold text-pink-600 mb-3 text-center">
                  Score Categories:
                </p>
                <div className="space-y-2 text-sm">
                  <div className={`flex items-center justify-between p-2 rounded ${score <= 3 ? 'bg-pink-200' : ''}`}>
                    <span>0-3 ❤️</span>
                    <span className="font-semibold">Friend zone 😅</span>
                  </div>
                  <div className={`flex items-center justify-between p-2 rounded ${score >= 4 && score <= 6 ? 'bg-pink-200' : ''}`}>
                    <span>4-6 ❤️</span>
                    <span className="font-semibold">Good love 💕</span>
                  </div>
                  <div className={`flex items-center justify-between p-2 rounded ${score >= 7 ? 'bg-pink-200' : ''}`}>
                    <span>7-20 ❤️</span>
                    <span className="font-semibold">True love 💖</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            {!saved ? (
              <button
                onClick={saveResult}
                disabled={saving}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300 disabled:opacity-50"
                data-testid="save-result-button"
              >
                {saving ? "Saving..." : "💾 Save My Result"}
              </button>
            ) : (
              <div className="bg-green-100 text-green-700 py-4 rounded-xl text-center font-bold">
                ✅ Result Saved Successfully!
              </div>
            )}

            {/* Share with Loved Ones Button */}
            <button
              onClick={() => setShowShareOptions(!showShareOptions)}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              data-testid="share-options-button"
            >
              <span className="text-2xl">💕👨‍❤️‍👨👩‍❤️‍👩💑</span>
              Share with Loved Ones
            </button>

            {/* Share Options Menu */}
            {showShareOptions && (
              <div className="glass-effect rounded-2xl p-6 space-y-3 fade-in-up">
                <p className="text-center font-bold text-pink-600 mb-2">
                  💕 Share the Love with Your Special Someone! 💕
                </p>
                <button
                  onClick={shareOnWhatsApp}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  data-testid="whatsapp-share-button"
                >
                  <span className="text-xl">📱💌</span>
                  Share My Results on WhatsApp
                </button>

                <button
                  onClick={shareQuizLink}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  data-testid="share-quiz-link-button"
                >
                  <span className="text-xl">💑🔗</span>
                  Invite Your Loved Ones to Take Quiz
                </button>
                
                <button
                  onClick={() => setShowShareOptions(false)}
                  className="w-full bg-gray-200 text-gray-700 py-2 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            )}

            <button
              onClick={() => navigate("/quiz")}
              className="w-full bg-white text-pink-600 border-2 border-pink-600 py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300"
              data-testid="retake-quiz-button"
            >
              🔄 Take Quiz Again
            </button>

            <button
              onClick={() => navigate("/history")}
              className="w-full bg-white text-pink-600 py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300"
              data-testid="view-history-button"
            >
              📊 View All Results
            </button>
          </div>
        </div>
      </div>

      {/* Ad Space - Bottom */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pb-8">
        <div className="ad-container" data-testid="result-bottom-ad">
          <AdSenseAd 
            adSlot="5678901234"
            style={{ minHeight: "90px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
