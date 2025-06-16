import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const IndianCinemaFacts = () => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [oneLike, setOneLike] = useState(false);
  const [oneDislike, setOneDislike] = useState(false);
  const [value, setValue] = useState("");
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setOneLike(!oneLike);
    setLike(prev => (oneLike ? prev - 1 : prev + 1));
  };

  const handleDislike = () => {
    setOneDislike(!oneDislike);
    setDislike(prev => (oneDislike ? prev - 1 : prev + 1));
  };

  const addComment = () => {
    if (!value.trim()) return;
    const newComment = { id: Date.now(), text: value };
    setComments([...comments, newComment]);
    setValue("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md border border-red-200 p-10 rounded-3xl shadow-2xl animate-fade-in-up">
        <h1 className="text-5xl font-extrabold text-center text-red-700 drop-shadow mb-10 tracking-wide animate-pulse">
          🎬 Top 10 Facts About Indian Cinema
        </h1>

        <section className="text-gray-800 space-y-5 text-lg transition-all duration-300">
          <p className="italic text-gray-700">Indian cinema, also known as Bollywood and its regional counterparts, is one of the world's largest and most vibrant film industries.</p>

          <ol className="list-decimal pl-6 space-y-3">
            {[
              "India produces over 1,800 films annually — more than any other country.",
              "India’s first full-length feature film was Raja Harishchandra (1913) by Dadasaheb Phalke.",
              "Major film industries in Tamil, Telugu, Kannada, Malayalam, Bengali, and more.",
              "Indian films are popular in over 90 countries including Russia, China, and UAE.",
              "Thavamai Thavamirundhu (Tamil) runs for 5 hours — among the longest Indian films.",
              "Lagaan, Mother India, and Salaam Bombay! were Oscar-nominated.",
              "Known for their elaborate music and dance numbers.",
              "Baahubali 2 and RRR broke global box office records.",
              "PVR Cinemas operates over 800 screens across India.",
              "Many stars like MGR, NTR, and Jaya Prada became politicians.",
            ].map((fact, index) => (
              <li
                key={index}
                className="hover:scale-[1.02] hover:text-red-800 transition duration-300 ease-in-out font-medium"
              >
                {fact}
              </li>
            ))}
          </ol>

          <p className="mt-8 font-semibold italic text-center text-red-600 text-xl">
            📌 Up Next: <em>How Bollywood is Embracing AI and VFX in Filmmaking</em>
          </p>
        </section>

        {/* Interaction Buttons */}
        <div className="flex justify-center gap-6 mt-10 mb-6">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition transform duration-200 shadow-lg hover:scale-105 
              ${oneLike ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'}
            `}
          >
            <FaThumbsUp size={20} /> Like ({like})
          </button>

          <button
            onClick={handleDislike}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition transform duration-200 shadow-lg hover:scale-105 
              ${oneDislike ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'}
            `}
          >
            <FaThumbsDown size={20} /> Dislike ({dislike})
          </button>
        </div>

        {/* Comment Section */}
        <div className="mt-10">
          <label className="block mb-3 text-xl font-semibold text-gray-800">💬 Share your thoughts:</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Write a comment..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-red-300"
            />
            <button
              onClick={addComment}
              className="px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
            >
              Submit
            </button>
          </div>

          <ul className="mt-6 space-y-3">
            {comments.map((comment) => (
              <li key={comment.id} className="bg-gray-100 p-3 rounded-md shadow-sm hover:bg-gray-200 transition">
                {comment.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndianCinemaFacts;
