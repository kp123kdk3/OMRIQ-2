declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
      }) => void;
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export {};

