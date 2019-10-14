import Modifier from 'ember-class-based-modifier';
import { guidFor } from '@ember/object/internals';

export default class MeasureRender extends Modifier {
  constructor() {
    super(...arguments);

    let guid = guidFor(this);
    this.logName = `render#${guid}`;

    console.time(this.logName);
  }

  didInstall() {
    console.timeEnd(this.logName);
  }
}
