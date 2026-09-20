export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function hasUrl(url?: string) {
  return Boolean(url?.trim())
}
