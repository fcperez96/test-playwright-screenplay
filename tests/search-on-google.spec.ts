import { test } from '@playwright/test';
import { Actor } from '@testla/screenplay-playwright';
import { BrowseTheWeb, Element } from '@testla/screenplay-playwright/web';
import { DoAGoogle } from '../tasks/DoAGoogle';

test('Search Picps Github repository', async ({ page }) => {
  const actor = Actor.named('Picps')
    .with('intent to search', '@picps playwright')
    .can(BrowseTheWeb.using(page));

  await actor.attemptsTo(DoAGoogle.search());

  await actor.asks(Element.toBe.visible('span[itemprop="name"]', {
    hasText: 'Picps'
  }));
});

