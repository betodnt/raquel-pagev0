'use server'

import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

interface EmailData {
  nome: string
  telefone: string
  email: string
  mensagem: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { nome, telefone, email, mensagem }: EmailData = req.body

      const transporter = nodemailer.createTransport({
        secure: true,
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: process.env.EMAIL_FROM,
          pass: process.env.EMAIL_KEY,
        },
      })

      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: 'contato@raquelrgsmasson.com.br',
        subject: 'Novo contato de cliente',
        text: `Nome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nMensagem: ${mensagem}`,
      }

      await transporter.sendMail(mailOptions)

      res.status(200).json({ message: 'Email enviado com sucesso' })
    } catch (error) {
      console.error('Erro ao enviar email', error)
      res.status(500).json({ message: 'Erro ao enviar email' })
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' })
  }
}

export default handler
