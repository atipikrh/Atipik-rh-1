import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FileText } from 'lucide-react'

export default function QuizPopup({ quizSectionRef }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Le popup apparaît quand le bloc quiz n'est plus visible
        if (!entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          // Délai pour laisser le composant se rendre avant de lancer l'animation
          setTimeout(() => setIsAnimating(true), 50)
        } else if (entry.isIntersecting && isVisible) {
          setIsAnimating(false)
          // Délai pour laisser l'animation de disparition se terminer
          setTimeout(() => setIsVisible(false), 300)
        }
      },
      { threshold: 0.1 } // Seuil de 10% de visibilité
    )

    if (quizSectionRef?.current) {
      observer.observe(quizSectionRef.current)
    }

    return () => {
      if (quizSectionRef?.current) {
        observer.unobserve(quizSectionRef.current)
      }
    }
  }, [quizSectionRef, isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 left-8 z-[999999]">
      <div className={`
        transition-all duration-300 ease-out
        ${isAnimating 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 -translate-y-4 scale-95'
        }
      `}>
        <Link 
          href="/bilan-de-competences/quiz"
          className="inline-flex items-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-3xl group border border-orange-400"
        >
          <FileText className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-sm font-medium">Faire le Quiz</span>
          <div className="w-2 h-2 border-r-2 border-t-2 border-white transform rotate-45 group-hover:translate-x-1 transition-transform duration-300"></div>
        </Link>
      </div>
    </div>
  )
}
