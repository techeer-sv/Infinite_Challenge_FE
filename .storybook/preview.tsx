import type { Preview } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyle from "../src/styles/GlobalStyles";

const queryClient = new QueryClient();

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Story />
      </QueryClientProvider>
    </MemoryRouter>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
