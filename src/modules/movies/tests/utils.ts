import { expect } from 'vitest'
import type { Insertable } from 'kysely'
import type { Movies } from '@/database'

/**
 * Generates a fake article with some default data for inserting it to the database.
 * Allows overriding properties.
 * @param overrides Any properties that should be different from the default fake article.
 * @returns an article that can be inserted into the database.
 */
export const moviesFactory = (
  overrides: Partial<Insertable<Movies>> = {}
): Insertable<Movies> => ({
  title: 'Thor',
  year: 2023,
  ...overrides,
})

// Producing flexible matchers for our fake data.
// You are free to use simple hard-coded expectations for your tests.
// However, if you want to be have tests that pin-point the exact issue,
// you might consider matchers. However, they should not contain
// any conditional logic, as that would make them hard to read.

/**
 * Generates a matcher for an article. Allows overriding properties.
 * @param overrides Any properties that should be different from the default fake article matcher.
 * @returns a matcher that can be used to compare an article from the database.
 */
export const moviesMatcher = (overrides: Partial<Insertable<Movies>> = {}) => ({
  id: expect.any(Number),
  ...overrides, // for id
  ...moviesFactory(overrides),
})
