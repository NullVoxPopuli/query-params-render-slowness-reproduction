import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  queryParams = ['filter'];

  @tracked filter;

  @tracked isRenderingProblem = false;

  @action toggleProblem() {
    this.isRenderingProblem = !this.isRenderingProblem;
  }

  @action changeFilter() {
    let old = Number.parseInt(this.filter || 0, 10);
    this.filter = old + 1;
  }
}
