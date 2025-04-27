import stylisticTs from '@stylistic/eslint-plugin-ts'
import parserTs from '@typescript-eslint/parser'

export default [
	stylisticTs.configs.customize({
		indent: 2,
		quotes: 'single',
		semi: true,
		jsx: true,
	})
]
