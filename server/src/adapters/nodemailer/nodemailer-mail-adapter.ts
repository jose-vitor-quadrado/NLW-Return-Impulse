import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from '../mail-adapter'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: "8816d58fe2b1c4",
    pass: "2d11fa1f89098f"
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@fidget.com>',
      to: 'SherbXD <josevitorquadrado@gmail.com>',
      subject,
      html: body
    })
  }
}