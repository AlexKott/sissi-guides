if (process.env.NODE_ENV === 'development' && window && !window._babelPolyfill) {
  require('@babel/polyfill');
}

export * from './render';
export { default as SissiLink } from './SissiLink';
