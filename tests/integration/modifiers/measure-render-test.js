import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Modifier | measure-render', function(hooks) {
  setupRenderingTest(hooks);

  test('it modifies elements', async function(assert) {
    await render(hbs`<div {{measureRender}}>Button Text</div>`);

    const element = find('div');
    assert.ok(element, 'the element is modified');
  });
});
