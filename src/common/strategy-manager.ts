export interface IStrategyManager {
  doAction: () => void;
  commit: <T>(data: T) => void;
}