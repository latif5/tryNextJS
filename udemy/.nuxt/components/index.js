export { default as Header } from '../../components/Header.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
