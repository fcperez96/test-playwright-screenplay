import { Actor, Task } from '@testla/screenplay-playwright';
import { Click, Fill, Navigate, Press } from '@testla/screenplay-playwright/web';

export class DoAGoogle extends Task {
  public async performAs(actor: Actor): Promise<void> {
    return actor.attemptsTo(
      Navigate.to('https://www.google.com/'),
      Fill.in('textarea[type="search"]',
        actor.states('intent to search') || ''),
      Press.key('Enter'),
      Click.on('div#search div#rso > div:nth-child(2) a[href="https://github.com/fcperez96"] h3')
    );
  }

  public static search(): DoAGoogle {
    return new DoAGoogle();
  }
}