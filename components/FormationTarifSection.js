import Link from 'next/link'
import {
  TARIF_INTER_LABEL,
  TARIF_INTRA_LABEL,
  TARIF_INTRA_TEXTE,
  TARIF_SELON_PROFIL_COMPLET,
  TARIF_SELON_PROFIL_COURT,
  formatTarifPublicDisplay,
} from '../lib/tarifs/tarifsCopy'

const VARIANT_STYLES = {
  certifiante: {
    publicHeader: 'bg-orange-100 text-[#013F63]',
    publicTitle: 'text-orange-500',
    publicAmount: 'text-orange-500',
    publicBtn: 'bg-orange-500 hover:bg-orange-600',
    profilHeader: 'bg-blue-100 text-[#013F63]',
    profilTitle: 'text-blue-600',
    profilBtn: 'bg-blue-600 hover:bg-blue-700',
    border: 'border-gray-100',
  },
  professionnalisante: {
    publicHeader: 'bg-accent-300 text-[#013F63]',
    publicTitle: 'text-accent-500',
    publicAmount: 'text-accent-500',
    publicBtn: 'bg-accent-500 hover:bg-accent-600',
    profilHeader: 'bg-muted-blue-200 text-[#013F63]',
    profilTitle: 'text-primary-600',
    profilBtn: 'bg-primary-600 hover:bg-[#012a4a]',
    border: 'border-muted-blue-200',
  },
  service: {
    publicHeader: 'bg-orange-100 text-[#013F63]',
    publicTitle: 'text-orange-500',
    publicAmount: 'text-accent-500',
    publicBtn: 'bg-accent-500 hover:bg-accent-600',
    profilHeader: 'bg-muted-blue-200 text-[#013F63]',
    profilTitle: 'text-primary-600',
    profilBtn: 'bg-primary-600 hover:bg-[#012a4a]',
    border: 'border-gray-100',
  },
}

const VARIANT_LABELS = {
  certifiante: {
    publicTitle: 'Tarif public',
    profilTitle: 'Tarif selon profil',
    profilTextWithPublic: TARIF_SELON_PROFIL_COMPLET,
    profilTextOnly: TARIF_SELON_PROFIL_COURT,
  },
  professionnalisante: {
    publicTitle: TARIF_INTER_LABEL,
    profilTitle: TARIF_INTRA_LABEL,
    profilTextWithPublic: TARIF_INTRA_TEXTE,
    profilTextOnly: TARIF_INTRA_TEXTE,
  },
  service: {
    publicTitle: 'Tarif public',
    profilTitle: 'Tarif selon profil',
    profilTextWithPublic: TARIF_SELON_PROFIL_COMPLET,
    profilTextOnly: TARIF_SELON_PROFIL_COURT,
  },
}

/**
 * Section tarifs harmonisée ATIPIK RH.
 * @param {object} props
 * @param {string|null} [props.publicPrice] - Montant tarif public (null = carte profil seule)
 * @param {string} [props.priceSuffix] - ex. "/ stagiaire"
 * @param {string} [props.formulaLabel] - sous-titre formule (bilan)
 * @param {'certifiante'|'professionnalisante'|'service'} [props.variant]
 * @param {string} props.contactHref
 * @param {string} [props.titleClassName] - classes pour le H2 (optionnel, si section autonome)
 * @param {boolean} [props.showHeading] - afficher le H2 Tarifs
 * @param {string} [props.sectionClassName]
 */
export default function FormationTarifSection({
  publicPrice = null,
  priceSuffix = '',
  formulaLabel = '',
  variant = 'certifiante',
  contactHref,
  showHeading = true,
  sectionClassName = 'py-12',
}) {
  const styles = VARIANT_STYLES[variant] ?? VARIANT_STYLES.certifiante
  const labels = VARIANT_LABELS[variant] ?? VARIANT_LABELS.certifiante
  const profilText = publicPrice ? labels.profilTextWithPublic : labels.profilTextOnly
  const display = publicPrice ? formatTarifPublicDisplay(publicPrice, { suffix: priceSuffix }) : null

  const publicCard = publicPrice ? (
    <div
      className={`bg-white rounded-3xl p-6 shadow-xl border ${styles.border} text-center`}
    >
      <div
        className={`${styles.publicHeader} rounded-t-2xl -mx-6 -mt-6 p-4 mb-4 h-20 flex items-center justify-center`}
      >
        <h3 className={`text-2xl font-bold ${styles.publicTitle}`}>{labels.publicTitle}</h3>
      </div>
      {formulaLabel ? (
        <p className="text-sm font-semibold text-[#013F63] mb-2">{formulaLabel}</p>
      ) : null}
      <div className="mb-6">
        <div className={`text-4xl font-bold ${styles.publicAmount} mb-2`}>
          {display.amount}
          <span className="text-2xl"> € TTC</span>
        </div>
        {display.suffix ? (
          <p className="text-sm text-[#013F63]">{display.suffix}</p>
        ) : null}
      </div>
      <Link
        href={contactHref}
        className={`inline-block px-8 py-3 ${styles.publicBtn} text-white font-semibold rounded-full transition-colors`}
      >
        En savoir plus
      </Link>
    </div>
  ) : null

  const profilCard = (
    <div
      className={`bg-white rounded-3xl p-6 shadow-xl border ${styles.border} text-center ${
        !publicPrice ? 'max-w-md w-full mx-auto' : ''
      }`}
    >
      <div
        className={`${styles.profilHeader} rounded-t-2xl -mx-6 -mt-6 p-4 mb-4 min-h-20 flex items-center justify-center`}
      >
        <h3 className={`text-xl md:text-2xl font-bold ${styles.profilTitle}`}>
          {labels.profilTitle}
        </h3>
      </div>
      <div className="mb-6 px-2">
        <p className="text-sm md:text-base text-[#013F63] leading-relaxed">{profilText}</p>
      </div>
      <Link
        href={contactHref}
        className={`inline-block px-8 py-3 ${styles.profilBtn} text-white font-semibold rounded-full transition-colors`}
      >
        En savoir plus
      </Link>
    </div>
  )

  return (
    <section id="tarifs" className={`${sectionClassName} scroll-mt-24`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {showHeading ? (
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                <span
                  className={`font-brittany text-4xl lg:text-5xl ${
                    variant === 'professionnalisante' ? 'text-accent-500' : 'text-orange-500'
                  }`}
                >
                  Tarifs
                </span>
              </h2>
            </div>
          ) : null}

          <div
            className={
              publicPrice
                ? 'grid md:grid-cols-2 gap-8 mb-12'
                : 'flex justify-center mb-12'
            }
          >
            {publicCard}
            {profilCard}
          </div>
        </div>
      </div>
    </section>
  )
}
