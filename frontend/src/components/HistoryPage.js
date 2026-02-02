import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AnimatedHearts from "./AnimatedHearts";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const HistoryPage = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total_quizzes: 0 });

  useEffect(() => {
    fetchResults();
    fetchStats();
  }, []);

  const fetchResults = async () => {
    try {
      const response = await axios.get(`${API}/quiz/results`);
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching results:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await axios.get(`${API}/quiz/stats`);
      setStats(response.data);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const getResultEmoji = (resultMessage) => {
    if (resultMessage.includes("Friend zone")) return "😅";
    if (resultMessage.includes("Good love")) return "💕";
    return "💖";
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-rose-400 to-red-400 relative overflow-hidden">
      <AnimatedHearts />
      
      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-3xl pulse-heart">❤️</span>
          <h1 className="text-2xl font-bold text-white">Quiz History</h1>
        </div>
        <button
          onClick={() => navigate("/")}
          className="bg-white/30 backdrop-blur-md text-white px-6 py-2 rounded-full hover:bg-white/40 transition-all duration-300"
          data-testid="home-button-history"
        >
          🏠 Home
        </button>
      </header>

      {/* Ad Space */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-6">
        <div className="ad-container">
          <span data-testid="history-ad">Advertisement Space - 728x90</span>
        </div>
      </div>

      {/* Stats Card */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-6">
        <div className="glass-effect rounded-2xl p-6 text-center">
          <p className="text-gray-600 text-lg mb-2">Total Quizzes Taken</p>
          <p className="text-5xl font-bold gradient-text" data-testid="total-quizzes">
            {stats.total_quizzes}
          </p>
        </div>
      </div>

      {/* Results Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-8">
        {loading ? (
          <div className="glass-effect rounded-2xl p-12 text-center">
            <div className="text-4xl mb-4">⏳</div>
            <p className="text-xl text-gray-600">Loading results...</p>
          </div>
        ) : results.length === 0 ? (
          <div className="glass-effect rounded-2xl p-12 text-center fade-in-up">
            <div className="text-6xl mb-4">💔</div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              No results yet!
            </h2>
            <p className="text-gray-600 mb-6">
              Be the first to take the Valentine Quiz
            </p>
            <button
              onClick={() => navigate("/quiz")}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300"
              data-testid="take-quiz-button"
            >
              Take Quiz Now 💖
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <div
                key={result.id}
                className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`result-card-${index}`}
              >
                {/* Image */}
                {result.image_data && (
                  <div className="mb-4">
                    <img
                      src={result.image_data}
                      alt="Couple"
                      className="w-full h-40 object-cover rounded-xl"
                    />
                  </div>
                )}
                
                {/* Name and Score */}
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-pink-600 mb-2">
                    {result.name}
                  </h3>
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {result.score}/20
                  </div>
                  <div className="flex justify-center gap-1 mb-2">
                    {Array.from({ length: 20 }, (_, i) => i).map((i) => (
                      <span
                        key={i}
                        className={`text-xs ${
                          i < result.score ? "text-red-500" : "text-gray-300"
                        }`}
                      >
                        {i < result.score ? "❤️" : "🤍"}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xl">
                    <span>{getResultEmoji(result.result_message)}</span>
                    <span className="font-semibold text-gray-700">
                      {result.result_message}
                    </span>
                  </div>
                </div>

                {/* Timestamp */}
                <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-3">
                  <span>📅 {formatDate(result.timestamp)}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Ad Space - Bottom */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-8">
        <div className="ad-container">
          <span data-testid="history-bottom-ad">Advertisement Space - 728x90</span>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => navigate("/quiz")}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-500 to-rose-500 text-white p-6 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 pulse-heart"
        data-testid="floating-quiz-button"
      >
        <span className="text-3xl">➕</span>
      </button>
    </div>
  );
};

export default HistoryPage;
