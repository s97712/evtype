import { Emiter } from './../src/emiter';

test('emiter', async () => {
  const emiter = new Emiter<{
    value: (v: number) => void
  }>();

  const watch = new Promise<number>(resolve => {
    emiter.on("value", resolve);
  })

  const value = Math.random();
  emiter.emit("value", value);
  
  await expect(watch).resolves.toEqual(value)

});