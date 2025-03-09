import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { action, counterId } = body;

    console.log(`${counterId} just ${action}ed`);

    return NextResponse.json({
      success: true,
      data: { action, counterId },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
};
