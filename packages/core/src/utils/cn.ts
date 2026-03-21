export type ClassDictionary = Record<string, any>
export type ClassArray = ClassValue[]
export type ClassValue = ClassArray | ClassDictionary | string | number | bigint | null | boolean | undefined

const resolve = (value: ClassValue): string => {
  if (typeof value === 'string' || typeof value === 'number') return String(value)

  if (Array.isArray(value)) return value.flatMap(resolve).filter(Boolean).join(' ')

  if (typeof value === 'object' && value !== null)
    return Object.entries(value)
      .filter(([, v]) => Boolean(v))
      .map(([k]) => k)
      .join(' ')

  return ''
}

/**
 * Merge class names. Supports strings, objects, arrays, and nested combinations.
 *
 * cn('foo', 'bar')                     → 'foo bar'
 * cn('foo', { bar: true, baz: false }) → 'foo bar'
 * cn('foo', ['bar', 'baz'])            → 'foo bar baz'
 */
export const cn = (...args: ClassValue[]): string =>
  args.flatMap(resolve).filter(Boolean).join(' ')
