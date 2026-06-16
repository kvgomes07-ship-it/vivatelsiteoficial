import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Lead from '@/models/Lead';

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();
    const { name, email, phone, company, message, service, source } = body;

    if (!name || !email || !phone || !company) {
      return NextResponse.json(
        { error: 'Por favor, preencha todos os campos obrigatórios.' },
        { status: 400 }
      );
    }

    const lead = await Lead.create({
      name,
      email,
      phone,
      company,
      message,
      service,
      source,
    });

    return NextResponse.json(
      { message: 'Solicitação enviada com sucesso.', data: lead },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Erro ao salvar lead:', error);
    return NextResponse.json(
      { error: 'Erro ao processar sua solicitação. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
