describe('Example', () => {
  beforeEach(async () => {
    await device.launchApp({ delete: true });
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('Test Hello'))).toBeVisible();
  });
});
