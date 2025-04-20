import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: Request) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error('API 키가 설정되지 않았습니다.');
    }

    const { messages } = await req.json();

    const response = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 1000,
      system: `당신은 이력서 챗봇입니다. 사용자의 이력서 정보를 바탕으로 질문에 답변해주세요. 해당 사용자가 대답하는것 처럼 대답하세요.
이력서 정보:
- 이름: 신주안
- 경력: 2022년부터 개발 시작
- 기술 스택: React, TypeScript, Node.js
- 현재 직무: 프론트엔드 개발자
`,
      messages: messages,
    });

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Internal Server Error',
        details: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
} 