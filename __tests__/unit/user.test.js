const { User } = require('../../src/app/models');

const bcrypt = require('bcryptjs');
const truncate = require('../utils/truncate');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password', async () => {
    const user = await User.create({ 
      name: 'John', 
      email: 'james@example.com', 
      password: '123456' 
    });

    const compareHash = await bcrypt.compare('123456', user.password_hash);
    
    expect(compareHash).toBe(true);
  });
});