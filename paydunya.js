
var paydunya = require('paydunya');

var setup = new paydunya.Setup({
  masterKey: 'po3uNTDv-wyVm-Vw5G-2Y11-jDQKoKzDRmyZ',
  privateKey: 'test_private_zs0y0grEJV8UPpZp5h7qtjK7UVk',
  publicKey: 'test_public_IYiIeTC9LNHKwItliYGjMrt6PgG',
  token: 'WAg0swUiSgJM85Yc18eL',
  mode: 'test' // Optionnel. Utilisez cette option pour les paiements tests.
});

console.log(setup);