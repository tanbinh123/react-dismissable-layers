import { DismissableLayersGlobalProvider } from '../src'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <DismissableLayersGlobalProvider>
      <Story />
    </DismissableLayersGlobalProvider>
  ),
];
