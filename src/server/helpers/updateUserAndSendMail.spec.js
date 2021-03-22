const { sendEmail } = require('./updateUserAndSendMailTestHelper');

jest.mock('nodemailer', () => ({
  createTransport: () => ({
    sendMail: (options, call) => {
      call();
    },
  }),
}));

describe('updateUserAndSendMail tests', () => {
  it('sends email', async done => {
    sendEmail(done);
  });
});

jest.clearAllMocks();
