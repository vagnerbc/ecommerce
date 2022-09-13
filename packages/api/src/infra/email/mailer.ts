import { EmailSender, Param } from 'api/src/data/protocols/email/sender'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import path from 'path'

import config from './config/mail'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const hbs = require('nodemailer-express-handlebars')

const { host, port, user, pass } = config

export class Mailer implements EmailSender {
  private transporter: Mail

  constructor() {
    this.transporter = nodemailer.createTransport({
      host,
      port: Number(port),
      auth: {
        user,
        pass
      }
    })

    this.transporter.use(
      'compile',
      hbs({
        viewEngine: 'handlebars',
        viewPath: path.resolve('./src/resources/mail/'),
        extName: '.html'
      })
    )
  }

  async send(param: Param): Promise<void> {
    await this.transporter.sendMail({
      from: param.from,
      to: param.to,
      subject: param.subject,
      html: param.html
    })
  }
}
