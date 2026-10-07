/**
 * Bloc de conversion des articles formations courtes (octobre 2026).
 * Promesse, bouton, formulaire court, lien formation, échange sans engagement.
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import HoneypotField from '../HoneypotField'
import FormAlert from '../FormAlert'
import { getRecaptchaToken } from '../../lib/recaptcha'
import { trackLead } from '../../lib/analytics'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[0-9+().\s-]{8,20}$/

function trimField(value, max) {
  return String(value || '').trim().slice(0, max)
}

export default function ArticleConversionHero({ conversion }) {
  return (
    <section
      id="devis-equipe"
      aria-label="Demande pour votre équipe"
      className="mb-10 rounded-3xl border border-[#013F63]/15 bg-[#FFDEC1]/50 p-6 lg:p-8"
    >
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div>
          <p className="text-xl font-semibold leading-snug text-[#013F63]">{conversion.promise}</p>
          <a
            href="#devis-equipe"
            className="mt-5 inline-flex px-6 py-3 rounded-full bg-[#FE6400] hover:bg-[#EAA93D] text-white font-semibold shadow-sm transition"
          >
            {conversion.ctaLabel}
          </a>
          <p className="mt-4 text-sm text-[#013F63]">
            <Link href={conversion.formationHref} className="font-semibold underline hover:text-[#FE6400]">
              {conversion.formationLabel}
            </Link>
          </p>
          <p className="mt-3 text-sm text-[#2E2E2E]">{conversion.reassurance}</p>
        </div>
        <ArticleLeadForm conversion={conversion} />
      </div>
    </section>
  )
}

export function ArticleConversionFooter({ conversion }) {
  return (
    <div className="mt-16 rounded-3xl bg-gradient-to-br from-orange-50 to-accent-100 p-8">
      <h2 className="text-2xl font-bold text-[#013F63] mb-3">{conversion.ctaLabel}</h2>
      <p className="text-[#2E2E2E] mb-6">{conversion.promise}</p>
      <a
        href="#devis-equipe"
        className="inline-flex px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition"
      >
        {conversion.ctaLabel}
      </a>
      <ul className="mt-6 space-y-2 text-[#013F63]">
        <li>
          <Link href={conversion.formationHref} className="font-semibold underline hover:text-[#FE6400]">
            {conversion.formationLabel}
          </Link>
        </li>
        <li>
          <Link href={conversion.contactHref} className="font-semibold underline hover:text-[#FE6400]">
            Page contact
          </Link>
        </li>
        <li>
          <Link href={conversion.reunionHref} className="font-semibold underline hover:text-[#FE6400]">
            Réunion d&apos;information
          </Link>
        </li>
        <li>
          <Link href={conversion.relatedHref} className="font-semibold underline hover:text-[#FE6400]">
            {conversion.relatedLabel}
          </Link>
        </li>
      </ul>
      <p className="mt-4 text-sm text-[#2E2E2E]">{conversion.reassurance}</p>
    </div>
  )
}

function ArticleLeadForm({ conversion }) {
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [formTimestamp, setFormTimestamp] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    setFormTimestamp(Date.now())
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (honeypot) return

    const prenomPropre = trimField(prenom, 80)
    const emailPropre = trimField(email, 120)
    const telephonePropre = trimField(telephone, 20)

    if (!prenomPropre || !EMAIL_RE.test(emailPropre) || !PHONE_RE.test(telephonePropre)) {
      setSubmitError('Indiquez un prénom, un e-mail valide et un téléphone.')
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const recaptchaToken = await getRecaptchaToken('contact_form')
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prenom: prenomPropre,
          nom: prenomPropre,
          email: emailPropre,
          telephone: telephonePropre,
          sujet: 'formation-courte',
          message: conversion.message,
          honeypot,
          timestamp: formTimestamp,
          recaptchaToken,
        }),
      })
      const data = await response.json()
      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Erreur lors de l\'envoi')
      }
      trackLead({ formation: conversion.formationLabel, source: 'article' })
      setIsSubmitted(true)
    } catch (error) {
      setSubmitError(error.message || 'Erreur lors de l\'envoi. Réessayez ou utilisez la page contact.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <FormAlert
        type="success"
        message="Votre demande est bien envoyée. Nous vous recontactons pour un échange sans engagement."
      />
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-5 shadow-sm" noValidate>
      <FormAlert type="error" message={submitError} onDismiss={() => setSubmitError('')} />
      <HoneypotField value={honeypot} onChange={(event) => setHoneypot(event.target.value)} />
      <div className="space-y-3">
        <label className="block text-sm font-medium text-[#013F63]" htmlFor="lead-prenom">
          Prénom
        </label>
        <input
          id="lead-prenom"
          name="prenom"
          type="text"
          autoComplete="given-name"
          required
          maxLength={80}
          value={prenom}
          onChange={(event) => setPrenom(event.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-[#013F63]"
        />
        <label className="block text-sm font-medium text-[#013F63]" htmlFor="lead-email">
          E-mail
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={120}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-[#013F63]"
        />
        <label className="block text-sm font-medium text-[#013F63]" htmlFor="lead-telephone">
          Téléphone
        </label>
        <input
          id="lead-telephone"
          name="telephone"
          type="tel"
          autoComplete="tel"
          required
          maxLength={20}
          value={telephone}
          onChange={(event) => setTelephone(event.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-[#013F63]"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 w-full rounded-full bg-[#013F63] px-6 py-3 font-semibold text-white hover:bg-[#012a4a] disabled:opacity-50"
      >
        {isSubmitting ? 'Envoi en cours…' : conversion.ctaLabel}
      </button>
      <p className="mt-3 text-xs text-[#2E2E2E]">{conversion.reassurance}</p>
    </form>
  )
}
