/**
 * Grille des sessions inter-entreprises (formations courtes).
 * @param {{ sessions: Array<{ titre: string, dates: string, modalite?: string }> }} props
 */
export default function FormationSessionsGrid({ sessions }) {
  if (!sessions?.length) return null

  return (
    <div id="dates" className="grid md:grid-cols-2 gap-8 mb-12 scroll-mt-24">
      {sessions.map((session) => (
        <div
          key={`${session.titre}-${session.dates}`}
          className="bg-white rounded-3xl p-8 shadow-xl border border-muted-blue-200 text-center"
        >
          <div className="bg-accent-300 text-[#013F63] rounded-t-2xl -mx-8 -mt-8 p-4 mb-6">
            <h3 className="text-2xl font-bold mb-2 text-accent-500">{session.titre}</h3>
          </div>
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <div className="w-auto h-8 bg-muted-blue-200 rounded-full flex items-center justify-center px-3">
                <span className="text-[#013F63] font-bold text-sm">{session.modalite || 'Présentiel'}</span>
              </div>
              <span className="text-[#013F63] font-medium">{session.dates}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
