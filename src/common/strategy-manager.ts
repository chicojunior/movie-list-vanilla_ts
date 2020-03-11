/* export class StrategyManager {

  public _strategy: any;

  constructor() {
    this._strategy = null;
  }

  set strategy(strategy: any) {
    this._strategy = strategy;
  }

  get strategy() {
    return this._strategy;
  }

  doAction() {
    this._strategy.doAction();
  }
} */

export interface IStrategyManager {
  doAction: () => void;
  commit: <T>(data: T) => void;
}