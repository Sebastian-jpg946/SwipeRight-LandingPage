"use client";

import { motion } from 'framer-motion';
import React, { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import confetti from "canvas-confetti";
import cardOptions from "../../app/data/cards";

const SurveyForm: React.FC = () => {
  const [surveySubmitted, setSurveySubmitted] = useState(false);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [showOtherCardInput, setShowOtherCardInput] = useState(false);

  const handleSurveySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = {
      tracking_method: (form.elements.namedItem('tracking_method') as HTMLInputElement).value,
      frustrations: (form.elements.namedItem('frustrations') as HTMLInputElement).value,
      feature_priorities: (form.elements.namedItem('feature_priorities') as HTMLInputElement).value,
      can_follow_up: (form.elements.namedItem('can_follow_up') as HTMLInputElement).checked,
      card_preferences: Array.from(
        form.querySelectorAll('input[name="card_preferences"]:checked')
      ).map((el: any) => el.value).join(', '),
      pain_points: (form.elements.namedItem('pain_points') as HTMLInputElement).value,
      features_wanted: (form.elements.namedItem('features_wanted') as HTMLInputElement).value,
      other_card: (form.elements.namedItem('other_card') as HTMLInputElement)?.value || null,
    };
    console.log("✅ Survey form data collected", data);

    const { error } = await supabase.from('survey_responses').insert([data]);
    if (!error) {
      form.reset();
      setSurveySubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setTimeout(() => setSurveySubmitted(false), 4000);
      console.log("✅ Survey data inserted into Supabase");
    } else {
      alert('Something went wrong. Please try again.');
      console.error("❌ Supabase survey insert error", error);
    }
  };

  const extendedCardOptions = cardOptions.includes("Other") ? cardOptions : [...cardOptions, "Other"];

  return (
    <motion.section
      className="mt-20 w-full max-w-3xl text-left"
      id="interest-survey"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-white mb-4">Optional Beta Survey</h2>
      <p className="text-white mb-4">
        Your feedback helps us build the best experience. If you're open to sharing more, please answer a few short questions.
      </p>
      <form className="space-y-4" onSubmit={handleSurveySubmit}>
        <textarea name="tracking_method" placeholder="How do you currently track credit card promos?" className="w-full px-4 py-2 border rounded placeholder-gray-300 text-white" rows={2}></textarea>
        <textarea name="frustrations" placeholder="What’s most frustrating about tracking rewards?" className="w-full px-4 py-2 border rounded placeholder-gray-300 text-white" rows={2}></textarea>
        <textarea name="feature_priorities" placeholder="Which features would make this app worth using?" className="w-full px-4 py-2 border rounded placeholder-gray-300 text-white" rows={2}></textarea>

        <div className="w-full relative">
          <label className="block text-white text-sm font-medium mb-1" htmlFor="card_preferences">Which cards do you use?</label>
          <div className="flex flex-wrap gap-2 border rounded px-4 py-2 bg-black text-white">
            {extendedCardOptions.map((card: string) => {
              const isSelected = selectedCards.includes(card);
              return (
                <div
                  key={card}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCards((prev) =>
                      prev.includes(card) ? prev.filter(c => c !== card) : [...prev, card]
                    );
                    if (card === "Other") {
                      setShowOtherCardInput(!selectedCards.includes("Other"));
                    }
                  }}
                  className={`cursor-pointer px-3 py-1 rounded-full border transition-transform duration-300 ease-in-out hover:scale-105 text-sm select-none ${
                    isSelected
                      ? "bg-white text-black"
                      : "bg-transparent text-white border-white hover:bg-white hover:text-black"
                  }`}
                >
                  {card}
                  <input
                    type="checkbox"
                    name="card_preferences"
                    value={card}
                    hidden
                    readOnly
                    checked={isSelected}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {showOtherCardInput && (
          <input
            type="text"
            name="other_card"
            placeholder="Please specify your card"
            className="w-full mt-2 px-4 py-2 border rounded placeholder-gray-300 text-white"
          />
        )}

        <textarea name="pain_points" placeholder="What’s frustrating about tracking rewards?" className="w-full px-4 py-2 border rounded placeholder-gray-300 text-white" rows={2}></textarea>
        <textarea name="features_wanted" placeholder="What features would be most helpful?" className="w-full px-4 py-2 border rounded placeholder-gray-300 text-white" rows={2}></textarea>

        <label className="flex items-center space-x-2 text-sm text-white">
          <input type="checkbox" name="can_follow_up" className="border-gray-300" />
          <span>I’m open to a short follow-up chat</span>
        </label>

        <button
          type="submit"
          className="px-6 py-3 bg-white text-black rounded-full font-semibold transition-transform duration-300 ease-in-out hover:bg-purple-500 hover:text-white hover:shadow-lg hover:scale-105 min-w-[150px] min-h-[48px] mt-4"
          aria-label="Submit your beta interest survey responses"
        >
          Submit Survey
        </button>
      </form>

      {surveySubmitted && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded">
          🎉 Thanks for sharing your thoughts! Your feedback has been recorded.
        </div>
      )}
    </motion.section>
  );
};

export default SurveyForm;