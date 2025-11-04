export interface PlayableMeta {
  id: string // folder name under /public/playables
  title: string // display name
  description: string // short line about the mechanic / goal
  link: string // resolved public URL
  tech?: string[] // optional stack tags
}

import rawData from './data/playables.json'

type UnknownRecord = Record<string, unknown>
function isPlayableMeta(obj: unknown): obj is PlayableMeta {
  const r = obj as UnknownRecord
  return (
    typeof r.id === 'string' &&
    typeof r.title === 'string' &&
    typeof r.description === 'string' &&
    typeof r.link === 'string'
  )
}

export const PLAYABLES: PlayableMeta[] = (Array.isArray(rawData) ? rawData : [])
  .filter(isPlayableMeta)
  .map((p) => ({ ...p }))
