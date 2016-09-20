module.exports = jest.fn(() => {
  return Promise.resolve({
    text: () => Promise.resolve('42')
  });
});
