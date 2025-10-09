import React, { useState } from 'react';
import { BookA, ChevronDown, ChevronUp, Play } from 'lucide-react';
import { useAppContext } from '../../hooks/useAppContext';
import { languages } from '../../data/languages';
import { articleRulesData, ArticleRule } from '../../data/articleRules';

export const ArticleRulesMode = () => {
  const { language } = useAppContext();
  const t = languages[language];
  const [expandedArticle, setExpandedArticle] = useState<'der' | 'die' | 'das' | null>('die');
  const [expandedRule, setExpandedRule] = useState<string | null>(null);
  const [practicingRule, setPracticingRule] = useState<ArticleRule | null>(null);

  const toggleArticle = (article: 'der' | 'die' | 'das') => {
    setExpandedArticle(expandedArticle === article ? null : article);
    setExpandedRule(null);
  };

  const toggleRule = (ruleId: string) => {
    setExpandedRule(expandedRule === ruleId ? null : ruleId);
  };

  const startPractice = (rule: ArticleRule) => {
    setPracticingRule(rule);
  };

  const getLanguageKey = (lang: string): 'en' | 'de' | 'uk' | 'pl' | 'sq' | 'ar' | 'it' => {
    const mapping: Record<string, 'en' | 'de' | 'uk' | 'pl' | 'sq' | 'ar' | 'it'> = {
      english: 'en',
      german: 'de',
      ukrainian: 'uk',
      polish: 'pl',
      albanian: 'sq',
      arabic: 'ar',
      italian: 'it'
    };
    return mapping[lang] || 'en';
  };

  const langKey = getLanguageKey(language);

  // Article colors
  const articleColors = {
    der: {
      bg: 'from-blue-50 to-blue-100',
      border: 'border-blue-200',
      text: 'text-blue-800',
      button: 'bg-blue-600 hover:bg-blue-700',
      badge: 'bg-blue-600'
    },
    die: {
      bg: 'from-pink-50 to-pink-100',
      border: 'border-pink-200',
      text: 'text-pink-800',
      button: 'bg-pink-600 hover:bg-pink-700',
      badge: 'bg-pink-600'
    },
    das: {
      bg: 'from-green-50 to-green-100',
      border: 'border-green-200',
      text: 'text-green-800',
      button: 'bg-green-600 hover:bg-green-700',
      badge: 'bg-green-600'
    }
  };

  if (practicingRule) {
    return (
      <ArticlePracticeMode
        rule={practicingRule}
        onClose={() => setPracticingRule(null)}
        language={language}
        langKey={langKey}
      />
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <BookA size={28} className="text-blue-600" />
          {t.articleRules || 'Article Rules (der/die/das)'}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-6">
          {t.articleRulesDescription || 'Learn the rules for German articles (der, die, das) with example words. Click on a rule to see examples and practice.'}
        </p>

        {/* Article Categories */}
        <div className="space-y-4">
          {articleRulesData.map((category) => {
            const colors = articleColors[category.article];
            const isExpanded = expandedArticle === category.article;

            return (
              <div key={category.article} className="border-2 rounded-lg overflow-hidden">
                {/* Article Header */}
                <button
                  onClick={() => toggleArticle(category.article)}
                  className={`w-full p-4 flex items-center justify-between bg-gradient-to-r ${colors.bg} ${colors.border} transition-all hover:shadow-md`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl sm:text-3xl font-bold ${colors.text}`}>
                      {category.article.toUpperCase()}
                    </span>
                    <span className={`px-3 py-1 ${colors.badge} text-white text-sm font-semibold rounded-full`}>
                      {category.rules.length} {category.rules.length === 1 ? 'rule' : 'rules'}
                    </span>
                  </div>
                  {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>

                {/* Rules List */}
                {isExpanded && (
                  <div className="bg-white p-4 space-y-3">
                    {category.rules.map((rule) => {
                      const isRuleExpanded = expandedRule === rule.id;

                      return (
                        <div key={rule.id} className="border rounded-lg overflow-hidden">
                          {/* Rule Header */}
                          <div className="bg-gray-50 p-3 sm:p-4">
                            <button
                              onClick={() => toggleRule(rule.id)}
                              className="w-full flex items-start justify-between gap-2 text-left"
                            >
                              <div className="flex-1">
                                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                                  {rule.ruleTitle[langKey]}
                                </h3>
                                <p className="text-sm text-gray-600">
                                  {rule.ruleDescription[langKey]}
                                </p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {rule.examples.map((example, idx) => (
                                    <span
                                      key={idx}
                                      className={`px-2 py-1 ${colors.badge} text-white text-xs font-semibold rounded`}
                                    >
                                      {example}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              {isRuleExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                          </div>

                          {/* Rule Content */}
                          {isRuleExpanded && (
                            <div className="p-4 bg-white">
                              <div className="mb-4 flex items-center justify-between">
                                <span className="text-sm text-gray-600">
                                  {rule.words.length} example words
                                </span>
                                <button
                                  onClick={() => startPractice(rule)}
                                  className={`flex items-center gap-2 px-4 py-2 ${colors.button} text-white rounded-lg font-semibold transition-colors text-sm sm:text-base`}
                                >
                                  <Play size={18} />
                                  {t.practiceFlashcards || 'Practice'}
                                </button>
                              </div>

                              {/* Word List */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                {rule.words.slice(0, 20).map((word, idx) => (
                                  <div
                                    key={idx}
                                    className="p-2 bg-gray-50 rounded border border-gray-200 hover:border-gray-300 transition-colors"
                                  >
                                    <div className="font-semibold text-gray-800 text-sm">
                                      {word.german}
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      {word.english}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              {rule.words.length > 20 && (
                                <p className="mt-3 text-sm text-gray-500 text-center">
                                  + {rule.words.length - 20} more words (click Practice to see all)
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Flashcard Practice Component
interface ArticlePracticeModeProps {
  rule: ArticleRule;
  onClose: () => void;
  language: string;
  langKey: 'en' | 'de' | 'uk' | 'pl' | 'sq' | 'ar' | 'it';
}

const ArticlePracticeMode: React.FC<ArticlePracticeModeProps> = ({ rule, onClose, language, langKey }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showingGerman, setShowingGerman] = useState(true);
  const t = languages[language as keyof typeof languages];

  const currentWord = rule.words[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % rule.words.length);
    setIsFlipped(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + rule.words.length) % rule.words.length);
    setIsFlipped(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const getTranslation = (word: typeof currentWord): string => {
    const translations: Record<string, string | undefined> = {
      english: word.english,
      german: word.german,
      ukrainian: word.ukrainian,
      polish: word.polish,
      albanian: word.albanian,
      arabic: word.arabic,
      italian: word.italian
    };
    return translations[language] || word.english;
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              {rule.ruleTitle[langKey]}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {t.practiceMode || 'Practice Mode'} - {currentIndex + 1} / {rule.words.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors text-sm sm:text-base"
          >
            {t.close || 'Close'}
          </button>
        </div>

        {/* Toggle Direction */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-gray-600">{t.showFirst || 'Show first'}:</span>
          <button
            onClick={() => { setShowingGerman(!showingGerman); setIsFlipped(false); }}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-semibold transition-colors"
          >
            {showingGerman ? 'German → Translation' : 'Translation → German'}
          </button>
        </div>
      </div>

      {/* Flashcard */}
      <div className="perspective-1000 mb-6">
        <div
          onClick={handleFlip}
          className={`relative w-full min-h-[300px] sm:min-h-[400px] transition-transform duration-500 transform-style-3d cursor-pointer ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Front Side */}
          <div className="absolute inset-0 backface-hidden">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-2xl p-8 sm:p-12 h-full flex flex-col items-center justify-center text-white">
              <div className="text-center">
                <p className="text-sm sm:text-base opacity-80 mb-4">
                  {t.clickToFlip || 'Click to see the answer'}
                </p>
                <p className="text-3xl sm:text-5xl font-bold mb-4">
                  {showingGerman ? currentWord.german : getTranslation(currentWord)}
                </p>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl shadow-2xl p-8 sm:p-12 h-full flex flex-col items-center justify-center text-white">
              <div className="text-center">
                <p className="text-sm sm:text-base opacity-80 mb-4">
                  {t.translation || 'Translation'}
                </p>
                <p className="text-3xl sm:text-5xl font-bold mb-4">
                  {showingGerman ? getTranslation(currentWord) : currentWord.german}
                </p>
                <div className="mt-6 space-y-2 text-sm sm:text-base">
                  <p className="opacity-90">
                    <span className="font-semibold">German:</span> {currentWord.german}
                  </p>
                  <p className="opacity-90">
                    <span className="font-semibold">English:</span> {currentWord.english}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-between">
        <button
          onClick={handlePrevious}
          className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors text-sm sm:text-base"
        >
          {t.previous || 'Previous'}
        </button>

        <div className="text-center">
          <p className="text-sm sm:text-base text-gray-600 font-semibold">
            {currentIndex + 1} {t.of || 'of'} {rule.words.length}
          </p>
        </div>

        <button
          onClick={handleNext}
          className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors text-sm sm:text-base"
        >
          {t.next || 'Next'}
        </button>
      </div>

      {/* CSS for 3D flip effect */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}} />
    </div>
  );
};
