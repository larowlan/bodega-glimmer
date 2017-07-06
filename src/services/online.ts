import Service from './-utils/service';
import { tracked } from '@glimmer/component';

export default class OnlineService extends Service {

  _online: () => void;
  _offline: () => void;

  @tracked isOnline = null;

  constructor(...args) {
    super(...args);

    this.isOnline = (
      self.navigator ? self.navigator.onLine : true
    );

    this._online = () => {
      this.isOnline = true;
    };
    this._offline = () => {
      this.isOnline = false;
    };

    self.addEventListener('online', this._online);
    self.addEventListener('offline', this._offline);
  }

  destroy() {
    self.removeEventListener('online', this._online);
    self.removeEventListener('offline', this._offline);
    super.destroy();
  }
});
