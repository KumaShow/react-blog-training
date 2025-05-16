declare module 'aos' {
  export interface AosOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    // 可依需求擴充更多選項
  }

  export function init(options?: AosOptions): void;
  export function refresh(): void;
  export function refreshHard(): void;
  export function destroy(): void;

  const aos: {
    init: typeof init;
    refresh: typeof refresh;
    refreshHard: typeof refreshHard;
    destroy: typeof destroy;
  };

  export default aos;
}