import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import AnimatedHearts from "./AnimatedHearts";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const { name, score, resultMessage, imageData } = location.state || {};

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
        image_data: imageData,
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
    const text = `🎉 My Valentine Quiz Result! 🎉\n\n👤 Name: ${name}\n❤️ Love Score: ${score}/20\n💖 Result: ${resultMessage}\n\nTake the quiz too! 💕`;
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
        <div className="ad-container">
          <span data-testid="result-ad">Advertisement Space - 728x90</span>
        </div>
      </div>

      {/* Result Card */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 pb-8">
        <div className="glass-effect rounded-3xl p-8 md:p-12 fade-in-up">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
              {name}'s Results 🎉
            </h2>
            
            {/* Uploaded Image */}
            {imageData && (
              <div className="mb-8">
                <img
                  src={imageData}
                  alt="Couple"
                  className="max-w-full h-64 object-contain mx-auto rounded-2xl shadow-lg"
                  data-testid="result-couple-image"
                />
              </div>
            )}

            {/* Score Display */}
            <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-8 mb-6">
              <p className="text-gray-600 text-lg mb-2">Your Love Score</p>
              <div className="text-7xl font-bold gradient-text mb-2">
                {score}/20
              </div>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(20)].map((_, i) => (
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

            <button
              onClick={shareOnWhatsApp}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              data-testid="whatsapp-share-button"
            >
              <span className="text-2xl">📱</span>
              Share on WhatsApp
            </button>

            <button
              onClick={() => navigate("/quiz")}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300"
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
        <div className="ad-container">
          <span data-testid="result-bottom-ad">Advertisement Space - 728x90</span>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
