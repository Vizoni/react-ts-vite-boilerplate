import { render, type RenderOptions } from '@testing-library/react';
import { StrictMode, type ReactElement, type ReactNode } from 'react';

const Providers = ({ children }: { children: ReactNode }) => (
  <StrictMode>
    {/* <MyProvider {...props}>{children}</Myprovider>*/}
    {children}
  </StrictMode>
);

export const renderWithProviders = (
  ui: ReactElement,
  options?: RenderOptions
): ReturnType<typeof render> => render(ui, { wrapper: Providers, ...options });
